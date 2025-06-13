import { useState, useEffect, useRef } from 'react';
import { NewsPostFrontmatter } from '../types/news';

// Type for the manifest file (updated based on build script changes)
interface NewsManifest {
  postsPerChunk: number;
  totalPosts: number;
  totalPages: number; // Total pages for 'all' posts
  categories: { [slug: string]: { totalPosts: number; totalPages: number } };
  authors: { [slug: string]: { totalPosts: number; totalPages: number } };
  tags: { [slug: string]: { totalPosts: number; totalPages: number } };
  services: { [slug: string]: { totalPosts: number; totalPages: number } }; // Added services
}

// Define the hook's input parameters (added service filter)
interface UseNewsIndexParams {
  filters?: {
    category?: string | null;
    author?: string | null;
    tag?: string | null;
    service?: string | null; // Added service filter
    // subCategory removed as it's less relevant for news
  };
  page?: number;
}

// Define the hook's return type (updated types)
interface UseNewsIndexReturn {
  posts: NewsPostFrontmatter[];
  loading: boolean;
  error: string | null;
  totalPages: number; // Total pages *for the current view*
  totalPosts: number; // Total posts *for the current view*
  currentPage: number;
  manifest: NewsManifest | null; // Expose manifest data
}

const useNewsIndex = ({ filters = {}, page = 1 }: UseNewsIndexParams = {}): UseNewsIndexReturn => {
  const [posts, setPosts] = useState<NewsPostFrontmatter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [manifest, setManifest] = useState<NewsManifest | null>(null);
  const [validatedPage, setValidatedPage] = useState(1);

  const filtersRef = useRef(filters);
  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);

  useEffect(() => {
    let isMounted = true;
    const currentFilters = filtersRef.current;
    const requestedPage = page;
    const currentPageForFetch = Math.max(1, requestedPage);

    setValidatedPage(currentPageForFetch);

    const fetchNewsData = async () => {
      if (!isMounted) return;
      setLoading(true);
      setError(null);
      setPosts([]);
      setTotalPages(0);
      setTotalPosts(0);

      try {
        // 1. Fetch the manifest file (updated path)
        let fetchedManifest: NewsManifest;
        try {
          const manifestResponse = await fetch('/newsManifest.json'); // Corrected path
          if (!manifestResponse.ok) {
            throw new Error(`Failed to fetch news manifest: ${manifestResponse.status} ${manifestResponse.statusText}`);
          }
          fetchedManifest = await manifestResponse.json();
          if (!isMounted) return;
          setManifest(fetchedManifest);
        } catch (manifestError) {
          console.error("Error fetching manifest:", manifestError);
          throw new Error("Could not load news configuration.");
        }

        // 2. Determine primary filter and target chunk path (added service filter)
        let primaryFilterType = 'all';
        let primaryFilterSlug = '';
        let viewTotalPosts = fetchedManifest.totalPosts;
        let viewTotalPages = fetchedManifest.totalPages;

            // --- Determine primary filter priority: Service > Category > Author > Tag > All ---
    if (currentFilters.service) {
      primaryFilterType = 'service';
      primaryFilterSlug = currentFilters.service;
      viewTotalPages = fetchedManifest.services?.[primaryFilterSlug]?.totalPages ?? 0;
      viewTotalPosts = fetchedManifest.services?.[primaryFilterSlug]?.totalPosts ?? 0;
        } else if (currentFilters.category) {
          primaryFilterType = 'cat';
          primaryFilterSlug = currentFilters.category;
          viewTotalPages = fetchedManifest.categories[primaryFilterSlug]?.totalPages ?? 0;
          viewTotalPosts = fetchedManifest.categories[primaryFilterSlug]?.totalPosts ?? 0;
        } else if (currentFilters.author) {
          primaryFilterType = 'author';
          primaryFilterSlug = currentFilters.author;
          viewTotalPages = fetchedManifest.authors[primaryFilterSlug]?.totalPages ?? 0;
          viewTotalPosts = fetchedManifest.authors[primaryFilterSlug]?.totalPosts ?? 0;
        } else if (currentFilters.tag) {
          primaryFilterType = 'tag';
          primaryFilterSlug = currentFilters.tag;
          viewTotalPages = fetchedManifest.tags[primaryFilterSlug]?.totalPages ?? 0;
          viewTotalPosts = fetchedManifest.tags[primaryFilterSlug]?.totalPosts ?? 0;
        }

        if (!isMounted) return;
        setTotalPages(viewTotalPages);
        setTotalPosts(viewTotalPosts);

        if (viewTotalPages === 0 || currentPageForFetch > viewTotalPages) {
          setPosts([]);
          setLoading(false);
          if (currentPageForFetch > viewTotalPages && viewTotalPages > 0) {
             setError("Invalid page number.");
          }
          // If viewTotalPages is 0, it means no posts for this filter, not an error
          // Setting error only if requested page > 0 and exceeds available pages
          return;
        }

        // Construct the path to the specific index chunk (updated path)
        const chunkFileName = primaryFilterSlug
          ? `${primaryFilterType}_${primaryFilterSlug}_p${currentPageForFetch}.json`
          : `${primaryFilterType}_p${currentPageForFetch}.json`;
        const chunkPath = `/newsIndex/${chunkFileName}`; // Use the correct index directory

        // 3. Fetch the required index chunk
        let chunkData: NewsPostFrontmatter[];
        try {
          const chunkResponse = await fetch(chunkPath);
          if (!chunkResponse.ok) {
             if (chunkResponse.status === 404) {
                 console.warn(`Chunk file not found: ${chunkPath}. Might be an invalid page or filter.`);
                 // Set empty posts instead of throwing error for 404, as it might just mean no posts for this filter/page combo
                 chunkData = []; 
                 setError(null); // Clear any previous error
                 // throw new Error("News articles for this page could not be found.");
             } else {
                 throw new Error(`Failed to fetch news chunk ${chunkFileName}: ${chunkResponse.status} ${chunkResponse.statusText}`);
             }
          } else {
              chunkData = await chunkResponse.json();
          }
        } catch (chunkError) {
          console.error("Error fetching chunk:", chunkError);
          // If fetch itself failed (not 404), propagate the error
          if (!(chunkError instanceof Error && chunkError.message.includes("News articles for this page could not be found"))) {
              throw chunkError; 
          } else {
              chunkData = []; // Ensure data is empty if specific 404 error occurred
          }
        }

        // 4. Apply secondary filters (if needed in future)
        let finalPosts = chunkData;

        if (!isMounted) return;
        setPosts(finalPosts);

      } catch (err) {
        if (!isMounted) return;
        console.error("Error in useNewsIndex fetchNewsData:", err);
        setError(err instanceof Error ? err.message : "Failed to load news articles.");
        setPosts([]);
        setTotalPages(0);
        setTotalPosts(0);
        setManifest(null);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchNewsData();

    return () => {
      isMounted = false;
    };
  // Rerun effect when page or specific filter values change.
  }, [page, filters.category, filters.author, filters.tag, filters.service]); // Added service to dependencies

  return { posts, loading, error, totalPages, totalPosts, currentPage: validatedPage, manifest };
};

export default useNewsIndex; 