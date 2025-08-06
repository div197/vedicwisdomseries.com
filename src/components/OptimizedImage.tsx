import React, { useState, useEffect } from 'react';
import { Box, Image, Skeleton } from '@chakra-ui/react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  borderRadius?: string;
  placeholder?: string;
  lazy?: boolean;
  fallback?: string;
}

// Modern image format support detection
const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const supportsAVIF = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  try {
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
};

// Generate responsive image sources
const generateSources = (src: string, _width?: number | string): string[] => {
  if (!src || typeof src !== 'string') return [src];
  
  const baseUrl = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  
  const sources: string[] = [];
  
  // Add AVIF if supported
  if (supportsAVIF()) {
    sources.push(`${baseUrl}.avif`);
  }
  
  // Add WebP if supported
  if (supportsWebP()) {
    sources.push(`${baseUrl}.webp`);
  }
  
  // Original format as fallback
  sources.push(src);
  
  return sources;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  borderRadius,
  placeholder: _placeholder,
  lazy = true,
  fallback = '/assets/placeholder-image.svg'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const sources = generateSources(src, width);
    
    // Try loading images in order of preference
    const tryLoadImage = async (index: number = 0): Promise<void> => {
      if (index >= sources.length) {
        setHasError(true);
        setCurrentSrc(fallback);
        setIsLoading(false);
        return;
      }

      const img = new Image();
      
      img.onload = () => {
        setCurrentSrc(sources[index]);
        setIsLoading(false);
        setHasError(false);
      };
      
      img.onerror = () => {
        tryLoadImage(index + 1);
      };
      
      img.src = sources[index];
    };

    setIsLoading(true);
    setHasError(false);
    tryLoadImage();
  }, [src, width, fallback]);

  if (isLoading) {
    return (
      <Skeleton
        width={width}
        height={height}
        borderRadius={borderRadius}
      />
    );
  }

  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      overflow="hidden"
      position="relative"
    >
      <Image
        src={currentSrc}
        alt={alt}
        width="100%"
        height="100%"
        objectFit={objectFit}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setCurrentSrc(fallback);
          }
        }}
        transition="opacity 0.3s ease"
        opacity={isLoading ? 0 : 1}
      />
    </Box>
  );
};

// Background image component with optimization
export const OptimizedBackgroundImage: React.FC<{
  src: string;
  children: React.ReactNode;
  height?: string;
  minHeight?: string;
  position?: 'center' | 'top' | 'bottom';
  overlay?: boolean;
  overlayOpacity?: number;
}> = ({
  src,
  children,
  height = '400px',
  minHeight,
  position = 'center',
  overlay = false,
  overlayOpacity = 0.5
}) => {
  const [optimizedSrc, setOptimizedSrc] = useState<string>('');

  useEffect(() => {
    const sources = generateSources(src);
    setOptimizedSrc(sources[0]); // Use the most optimized format
  }, [src]);

  return (
    <Box
      position="relative"
      height={height}
      minHeight={minHeight}
      backgroundImage={`url(${optimizedSrc})`}
      backgroundPosition={position}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {overlay && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="black"
          opacity={overlayOpacity}
          zIndex={1}
        />
      )}
      <Box position="relative" zIndex={2} width="100%">
        {children}
      </Box>
    </Box>
  );
};

export default OptimizedImage;