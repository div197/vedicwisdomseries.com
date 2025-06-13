/* eslint-disable react-refresh/only-export-components */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Image, Skeleton, useColorModeValue } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { optimizeImageUrl, ImageOptimizationOptions } from '../utils/imageOptimization';

// LazyImage component props
interface LazyImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  borderRadius?: string | number;
  fallbackSrc?: string;
  placeholder?: string;
  optimization?: ImageOptimizationOptions;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  borderRadius,
  fallbackSrc,
  placeholder,
  optimization,
  onLoad,
  onError,
  priority = false,
  sizes,
  loading = 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const loadStartTime = useRef<number>(0);
  
  // Move all useColorModeValue calls to the top level
  const errorBg = useColorModeValue('kd.canvas', 'kd.borderHover');
  const errorColor = useColorModeValue('kd.textMuted', 'kd.textSecondary');
  
  // Intersection Observer for lazy loading
  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority, // Skip intersection observer for priority images
  });

  // Color mode values
  const skeletonStartColor = useColorModeValue('kd.hover', 'kd.borderHover');
  const skeletonEndColor = useColorModeValue('kd.active', 'kd.border');

  // Determine if image should load
  const shouldLoad = priority || inView;

  // Handle image load
  const handleLoad = useCallback(() => {
    const endTime = performance.now();
    const totalLoadTime = endTime - loadStartTime.current;
    
    setIsLoaded(true);
    
    // Development performance logging
    if (import.meta.env.DEV) {
      console.log(`Image ${src} loaded in ${totalLoadTime.toFixed(2)}ms`);
    }
    
    onLoad?.();
  }, [src, onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Start load timer when component mounts or when shouldLoad becomes true
  useEffect(() => {
    if (shouldLoad && !isLoaded && !hasError) {
      loadStartTime.current = performance.now();
    }
  }, [shouldLoad, isLoaded, hasError]);

  // Determine the image source to use
  const getImageSrc = useCallback(() => {
    if (hasError && fallbackSrc) {
      return fallbackSrc;
    }
    
    if (!shouldLoad) {
      return placeholder || '';
    }

    // Apply optimization if provided
    if (optimization && src) {
      return optimizeImageUrl(src, optimization);
    }

    return src;
  }, [hasError, fallbackSrc, shouldLoad, placeholder, optimization, src]);

  const imageSrc = getImageSrc();

  return (
    <Box
      ref={intersectionRef}
      position="relative"
      width={width}
      height={height}
      className={className}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          startColor={skeletonStartColor}
          endColor={skeletonEndColor}
          borderRadius={borderRadius}
        />
      )}

      {/* Actual image */}
      {shouldLoad && imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          loading={loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          opacity={isLoaded ? 1 : 0}
          transition="opacity 0.3s ease-in-out"
          position={isLoaded ? 'static' : 'absolute'}
          top={0}
          left={0}
        />
      )}

      {/* Error fallback */}
      {hasError && !fallbackSrc && (
        <Box
          width="100%"
          height="100%"
          bg={errorBg}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={errorColor}
          fontSize="sm"
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
};

export default LazyImage;

// Utility function to generate optimized image URLs
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  quality: number = 75,
  format: 'webp' | 'jpeg' | 'png' = 'webp'
): string => {
  // For external URLs, return as-is
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }

  // For local images, we could implement image optimization service here
  // This could integrate with services like Cloudinary, ImageKit, or custom optimization
  let optimizedUrl = src;

  // Add query parameters for optimization (example implementation)
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality !== 75) params.set('q', quality.toString());
  if (format !== 'jpeg') params.set('f', format);

  if (params.toString()) {
    optimizedUrl += `?${params.toString()}`;
  }

  return optimizedUrl;
};

// Hook for responsive image sizes
export const useResponsiveImageSizes = (
  breakpoints: { [key: string]: string } = {
    base: '100vw',
    sm: '100vw',
    md: '50vw',
    lg: '33vw',
    xl: '25vw',
  }
): string => {
  const sizes = Object.entries(breakpoints)
    .reverse()
    .map(([breakpoint, size]) => {
      if (breakpoint === 'base') return size;
      return `(min-width: ${getBreakpointValue(breakpoint)}) ${size}`;
    })
    .join(', ');

  return sizes;
};

// Helper function to get breakpoint values
const getBreakpointValue = (breakpoint: string): string => {
  const breakpoints: { [key: string]: string } = {
    sm: '30em',    // 480px
    md: '48em',    // 768px
    lg: '62em',    // 992px
    xl: '80em',    // 1280px
    '2xl': '96em', // 1536px
  };

  return breakpoints[breakpoint] || '0em';
};

// Performance monitoring for images
export const trackImagePerformance = (src: string, loadTime: number) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track image loading performance
    performance.mark(`image-load-${src}`);
    
    // You could send this data to analytics
    if (import.meta.env.DEV) {
      console.log(`Image ${src} loaded in ${loadTime}ms`);
    }
  }
}; 
