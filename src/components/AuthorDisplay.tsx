import React from 'react';
import {
  Avatar,
  Text,
  HStack,
  Link as ChakraLink,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface AuthorDisplayProps {
  name: string;
  slug?: string; // Optional slug for linking
  avatarUrl?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showLink?: boolean; // Whether to link to author filter page
  basePath?: string; // Optional base path for the author link (e.g., "/news" or "/blog")
}

// Helper to create slug
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word chars (fixed escape)
    .replace(/-+/g, '-'); // Replace multiple - with single - (fixed escape)
};

const AuthorDisplay: React.FC<AuthorDisplayProps> = ({
  name,
  slug,
  avatarUrl,
  size = 'sm',
  showLink = false, // Default to not showing link
  basePath = '/blog', // Default to '/blog'
}) => {
  const authorSlug = slug || slugify(name); // Use provided slug or generate one
  
  // Configuration-driven styling
  const linkColor = useColorModeValue('text.primary', 'text.primary');
  const linkHoverColor = useColorModeValue('text.link.hover', 'text.link.hover');
  const avatarBg = useColorModeValue('kd.primaryLight', 'kd.primaryDark');
  const avatarColor = useColorModeValue('kd.primary', 'kd.primaryLight');

  const avatarComponent = (
    <Avatar 
      size={size} 
      name={name} 
      src={avatarUrl || undefined} // Pass undefined if null/empty
      bg={!avatarUrl ? avatarBg : undefined} // Use theme-based fallback bg if no image
      color={!avatarUrl ? avatarColor : 'inherit'} // Use theme-based fallback color
      // Use initials as fallback directly within Avatar if supported, or compute:
      // children={!avatarUrl ? getInitials(name) : undefined}
    />
  );

  const nameComponent = (
    <Text fontSize={size} fontWeight="headingMedium" color={linkColor}>
      {name} 
    </Text>
  );

  const content = (
    <HStack spacing={2} align="center">
      {avatarComponent}
      {nameComponent}
    </HStack>
  );

  if (showLink) {
    return (
      <Tooltip label={`View posts by ${name}`} openDelay={300}>
        <ChakraLink 
          as={RouterLink} 
          to={`${basePath}?author=${authorSlug}`}
          _hover={{ textDecoration: 'none', color: linkHoverColor }}
          onClick={(e) => e.stopPropagation()} // Prevent card click if nested
        >
          {content}
        </ChakraLink>
      </Tooltip>
    );
  }

  return content; // Return plain HStack if not linking
};

export default AuthorDisplay; 
