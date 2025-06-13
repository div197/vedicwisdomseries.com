

// Base structure for frontmatter across different content types
export interface BaseFrontmatter {
  title: string;
  date: string; // ISO 8601 format (e.g., "2023-10-27T10:00:00Z")
  slug: string;
  // Add other common fields if needed
}

// Specific frontmatter for news posts
export interface NewsPostFrontmatter extends BaseFrontmatter {
  author?: string; // Optional: defaults to siteConfig.defaultAuthor
  authorSlug?: string; // Optional: slug for linking to author's posts
  authorImage?: string; // Optional: path to author's image, relative to /public
  category?: string; // Optional: General news category slug (e.g., "announcements", "achievements")
  services?: string[] | string; // Optional: Array of service slugs (e.g., ["web-development"]) or 'all' or single slug
  tags?: string[]; // Optional: Array of tags (e.g., ["sports", "annual day"])
  featuredImage?: string; // Optional: path relative to /public
  excerpt?: string; // Optional: Short summary for previews
  dateModified?: string; // Optional: ISO 8601 format for last modification
}

// Represents the fully loaded news post data, including content
export interface NewsPost extends NewsPostFrontmatter {
  content: string; // The Markdown content of the post
  // Optional: Add calculated fields if needed
}

// Structure for the generated news index file (public/newsIndex/all_p1.json etc.)
// This interface isn't strictly needed for the index files themselves,
// as they are arrays of NewsPostFrontmatter, but useful for clarity.
export interface NewsIndexChunk {
  posts: NewsPostFrontmatter[];
}