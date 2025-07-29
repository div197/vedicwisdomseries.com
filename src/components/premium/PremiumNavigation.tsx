import React, { useState } from 'react'
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Button,
  Icon,
  Text,
  Badge,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Divider
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'
import { FaChevronDown, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Premium Navigation System - Centralized Navigation Architecture
// Highest Quality Navigation Components for Maximum UX

interface PremiumNavLinkProps {
  to: string
  children: React.ReactNode
  variant?: 'default' | 'button' | 'tab' | 'breadcrumb' | 'sidebar'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconType
  badge?: string | number
  external?: boolean
  disabled?: boolean
  onClick?: () => void
}

interface PremiumNavMenuProps {
  items: Array<{
    label: string
    href: string
    icon?: IconType
    badge?: string | number
    children?: Array<{ label: string; href: string; icon?: IconType }>
  }>
  variant?: 'horizontal' | 'vertical' | 'dropdown' | 'mega'
  size?: 'sm' | 'md' | 'lg'
  spacing?: number
}

interface PremiumBreadcrumbProps {
  items: Array<{ label: string; href?: string }>
  separator?: React.ReactNode
  variant?: 'default' | 'arrow' | 'slash'
}

interface PremiumTabsProps {
  tabs: Array<{ label: string; content: React.ReactNode; icon?: IconType; badge?: string | number }>
  defaultTab?: number
  variant?: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded'
  size?: 'sm' | 'md' | 'lg'
  colorScheme?: string
}

interface PremiumSidebarProps {
  items: Array<{
    label: string
    href: string
    icon: IconType
    badge?: string | number
    children?: Array<{ label: string; href: string; icon?: IconType }>
  }>
  collapsed?: boolean
  variant?: 'default' | 'compact' | 'floating'
  position?: 'left' | 'right'
}

// Advanced Link Styling
const getLinkStyles = (variant: string, size: string, isActive: boolean) => {
  const baseStyles = {
    default: {
      color: isActive ? 'primary.500' : useColorModeValue('gray.700', 'gray.300'),
      fontWeight: isActive ? '600' : '500',
      _hover: {
        color: 'primary.500',
        textDecoration: 'none'
      }
    },
    button: {
      bg: isActive ? 'primary.500' : 'transparent',
      color: isActive ? 'white' : useColorModeValue('gray.700', 'gray.300'),
      px: 4,
      py: 2,
      borderRadius: 'md',
      border: '1px solid',
      borderColor: isActive ? 'primary.500' : 'transparent',
      _hover: {
        bg: isActive ? 'primary.600' : 'primary.50',
        borderColor: 'primary.500',
        textDecoration: 'none'
      }
    },
    tab: {
      position: 'relative' as const,
      color: isActive ? 'primary.500' : useColorModeValue('gray.600', 'gray.400'),
      fontWeight: isActive ? '600' : '500',
      pb: 2,
      _after: isActive ? {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        bg: 'primary.500'
      } : {},
      _hover: {
        color: 'primary.500',
        textDecoration: 'none'
      }
    },
    breadcrumb: {
      color: useColorModeValue('gray.600', 'gray.400'),
      fontSize: 'sm',
      _hover: {
        color: 'primary.500',
        textDecoration: 'none'
      }
    },
    sidebar: {
      w: 'full',
      justifyContent: 'flex-start',
      color: isActive ? 'primary.500' : useColorModeValue('gray.700', 'gray.300'),
      bg: isActive ? 'primary.50' : 'transparent',
      fontWeight: isActive ? '600' : '500',
      px: 3,
      py: 2.5,
      borderRadius: 'lg',
      _hover: {
        bg: isActive ? 'primary.100' : useColorModeValue('gray.100', 'gray.700'),
        color: 'primary.500',
        textDecoration: 'none'
      }
    }
  }

  const sizeStyles = {
    sm: { fontSize: 'sm' },
    md: { fontSize: 'md' },
    lg: { fontSize: 'lg' }
  }

  return {
    ...baseStyles[variant as keyof typeof baseStyles],
    ...sizeStyles[size as keyof typeof sizeStyles]
  }
}

// Premium Navigation Link Component
export const PremiumNavLink: React.FC<PremiumNavLinkProps> = ({
  to,
  children,
  variant = 'default',
  size = 'md',
  icon,
  badge,
  external = false,
  disabled = false,
  onClick
}) => {
  const location = useLocation()
  const isActive = location.pathname === to
  const linkStyles = getLinkStyles(variant, size, isActive)

  const LinkComponent = external ? Link : RouterLink
  const linkProps = external ? { href: to, isExternal: true } : { to }

  const MotionFlex = motion(Flex)

  return (
    <MotionFlex
      as={LinkComponent}
      {...linkProps}
      onClick={onClick}
      align="center"
      gap={2}
      className={`premium-nav-link premium-nav-link--${variant}`}
      opacity={disabled ? 0.5 : 1}
      pointerEvents={disabled ? 'none' : 'auto'}
      whileHover={{ scale: variant === 'button' ? 1.02 : 1 }}
      whileTap={{ scale: variant === 'button' ? 0.98 : 1 }}
      transition="all 0.2s ease"
      {...linkStyles}
    >
      {icon && <Icon as={icon} boxSize={4} />}
      <Text>{children}</Text>
      {badge && (
        <Badge
          colorScheme="primary"
          size="sm"
          borderRadius="full"
          px={2}
          py={0.5}
        >
          {badge}
        </Badge>
      )}
      {external && <Icon as={FaExternalLinkAlt} boxSize={3} />}
    </MotionFlex>
  )
}

// Premium Navigation Menu Component
export const PremiumNavMenu: React.FC<PremiumNavMenuProps> = ({
  items,
  variant = 'horizontal',
  size = 'md',
  spacing = 4
}) => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set())

  const toggleMenu = (label: string) => {
    const newOpenMenus = new Set(openMenus)
    if (newOpenMenus.has(label)) {
      newOpenMenus.delete(label)
    } else {
      newOpenMenus.add(label)
    }
    setOpenMenus(newOpenMenus)
  }

  const menuLayouts = {
    horizontal: HStack,
    vertical: VStack,
    dropdown: VStack,
    mega: Flex
  }

  const MenuLayout = menuLayouts[variant]
  const isVertical = variant === 'vertical' || variant === 'dropdown'

  return (
    <MenuLayout
      spacing={spacing}
      align={isVertical ? 'stretch' : 'center'}
      className={`premium-nav-menu premium-nav-menu--${variant}`}
    >
      {items.map((item) => (
        <Box key={item.label} position="relative">
          {item.children ? (
            <Box>
              <Button
                variant="ghost"
                size={size}
                rightIcon={<FaChevronDown />}
                onClick={() => toggleMenu(item.label)}
                leftIcon={item.icon ? <Icon as={item.icon} /> : undefined}
              >
                {item.label}
                {item.badge && <Badge ml={2}>{item.badge}</Badge>}
              </Button>
              
              <Collapse in={openMenus.has(item.label)}>
                <VStack
                  align="stretch"
                  spacing={1}
                  mt={2}
                  pl={4}
                  borderLeft="2px solid"
                  borderColor="gray.200"
                >
                  {item.children.map((child) => (
                    <PremiumNavLink
                      key={child.label}
                      to={child.href}
                      variant="default"
                      size="sm"
                      icon={child.icon}
                    >
                      {child.label}
                    </PremiumNavLink>
                  ))}
                </VStack>
              </Collapse>
            </Box>
          ) : (
            <PremiumNavLink
              to={item.href}
              variant={variant === 'horizontal' ? 'default' : 'sidebar'}
              size={size}
              icon={item.icon}
              badge={item.badge}
            >
              {item.label}
            </PremiumNavLink>
          )}
        </Box>
      ))}
    </MenuLayout>
  )
}

// Premium Breadcrumb Component
export const PremiumBreadcrumb: React.FC<PremiumBreadcrumbProps> = ({
  items,
  separator = <FaChevronRight size={12} />,
  variant = 'default'
}) => {
  const separatorStyles = {
    default: separator,
    arrow: <FaChevronRight size={12} />,
    slash: <Text color="gray.400">/</Text>
  }

  const currentSeparator = separatorStyles[variant]

  return (
    <HStack
      spacing={2}
      className={`premium-breadcrumb premium-breadcrumb--${variant}`}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <PremiumNavLink to={item.href} variant="breadcrumb">
              {item.label}
            </PremiumNavLink>
          ) : (
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.800', 'gray.200')}
              fontWeight="500"
            >
              {item.label}
            </Text>
          )}
          {index < items.length - 1 && (
            <Text color="gray.400">{currentSeparator}</Text>
          )}
        </React.Fragment>
      ))}
    </HStack>
  )
}

// Premium Tabs Component
export const PremiumTabs: React.FC<PremiumTabsProps> = ({
  tabs,
  defaultTab = 0,
  variant = 'line',
  size = 'md',
  colorScheme = 'primary'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const tabVariants = {
    line: {
      borderBottom: '2px solid',
      borderColor: 'gray.200'
    },
    enclosed: {
      bg: useColorModeValue('gray.50', 'gray.800'),
      borderRadius: 'lg',
      p: 1
    },
    'soft-rounded': {
      bg: 'transparent'
    },
    'solid-rounded': {
      bg: useColorModeValue('gray.100', 'gray.700'),
      borderRadius: 'lg',
      p: 1
    }
  }

  return (
    <Box className={`premium-tabs premium-tabs--${variant}`}>
      <Flex {...tabVariants[variant]} mb={4}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant={activeTab === index ? 'solid' : 'ghost'}
            colorScheme={activeTab === index ? colorScheme : 'gray'}
            size={size}
            onClick={() => setActiveTab(index)}
            leftIcon={tab.icon ? <Icon as={tab.icon} /> : undefined}
            borderRadius={variant.includes('rounded') ? 'md' : 0}
            flex={variant === 'enclosed' || variant === 'solid-rounded' ? 1 : undefined}
          >
            {tab.label}
            {tab.badge && <Badge ml={2}>{tab.badge}</Badge>}
          </Button>
        ))}
      </Flex>
      
      <Box>{tabs[activeTab]?.content}</Box>
    </Box>
  )
}

// Premium Sidebar Component
export const PremiumSidebar: React.FC<PremiumSidebarProps> = ({
  items,
  collapsed = false,
  variant = 'default',
  position = 'left'
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(label)) {
      newExpanded.delete(label)
    } else {
      newExpanded.add(label)
    }
    setExpandedItems(newExpanded)
  }

  const sidebarVariants = {
    default: {
      bg: useColorModeValue('white', 'gray.800'),
      borderRight: '1px solid',
      borderColor: useColorModeValue('gray.200', 'gray.700')
    },
    compact: {
      bg: useColorModeValue('gray.50', 'gray.900'),
      border: 'none'
    },
    floating: {
      bg: useColorModeValue('white', 'gray.800'),
      borderRadius: 'xl',
      boxShadow: 'xl',
      border: '1px solid',
      borderColor: useColorModeValue('gray.200', 'gray.700'),
      m: 4
    }
  }

  return (
    <Box
      w={collapsed ? '16' : '64'}
      h="full"
      transition="width 0.3s ease"
      className={`premium-sidebar premium-sidebar--${variant} premium-sidebar--${position}`}
      {...sidebarVariants[variant]}
    >
      <VStack spacing={1} p={4} align="stretch">
        {items.map((item) => (
          <Box key={item.label}>
            {item.children ? (
              <Box>
                <Button
                  variant="ghost"
                  w="full"
                  justifyContent="flex-start"
                  leftIcon={<Icon as={item.icon} />}
                  rightIcon={
                    !collapsed ? (
                      <Icon
                        as={FaChevronDown}
                        transform={
                          expandedItems.has(item.label) ? 'rotate(0deg)' : 'rotate(-90deg)'
                        }
                        transition="transform 0.2s"
                      />
                    ) : undefined
                  }
                  onClick={() => !collapsed && toggleExpanded(item.label)}
                  size="sm"
                >
                  {!collapsed && (
                    <>
                      {item.label}
                      {item.badge && <Badge ml="auto">{item.badge}</Badge>}
                    </>
                  )}
                </Button>
                
                {!collapsed && (
                  <Collapse in={expandedItems.has(item.label)}>
                    <VStack spacing={0.5} mt={1} pl={4} align="stretch">
                      {item.children.map((child) => (
                        <PremiumNavLink
                          key={child.label}
                          to={child.href}
                          variant="sidebar"
                          size="sm"
                          icon={child.icon}
                        >
                          {child.label}
                        </PremiumNavLink>
                      ))}
                    </VStack>
                  </Collapse>
                )}
              </Box>
            ) : (
              <PremiumNavLink
                to={item.href}
                variant="sidebar"
                icon={item.icon}
                badge={!collapsed ? item.badge : undefined}
              >
                {!collapsed && item.label}
              </PremiumNavLink>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

// Export all navigation components
export {
  PremiumNavLink as NavLink,
  PremiumNavMenu as NavMenu,
  PremiumBreadcrumb as Breadcrumb,
  PremiumTabs as Tabs,
  PremiumSidebar as Sidebar
}