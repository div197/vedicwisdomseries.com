import React, { useState } from 'react'
import { FaHome, FaCog, FaUser, FaEnvelope, FaStar, FaRocket, FaShield, FaLightbulb } from 'react-icons/fa'
import {
  // Layout System
  Section,
  Container,
  Grid,
  VStack,
  HStack,
  
  // Typography System
  Heading,
  Text,
  Badge,
  Quote,
  
  // Form System
  Form,
  Input,
  Textarea,
  Select,
  Submit,
  
  // Animation System
  Animation,
  Stagger,
  Hover,
  Loading,
  
  // Navigation System
  NavLink,
  NavMenu,
  Breadcrumb,
  Tabs,
  
  // Core Components
  PremiumCard as Card,
  PremiumButton as Button
} from './index'

// Premium Component Library Demo Page
// Demonstrates the complete centralized Chakra UI architecture

const PremiumExamplePage: React.FC = () => {
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [loadingDemo, setLoadingDemo] = useState(false)

  const handleFormSubmit = async (data: Record<string, any>) => {
    setFormSubmitting(true)
    console.log('Form data:', data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormSubmitting(false)
    alert('Form submitted successfully!')
  }

  const toggleLoading = () => {
    setLoadingDemo(!loadingDemo)
  }

  // Demo data
  const features = [
    {
      title: 'Performance Optimized',
      description: 'Built for speed with tree-shaking and minimal bundle impact',
      icon: FaRocket,
      badge: 'Fast'
    },
    {
      title: 'Accessibility First',
      description: 'WCAG 2.1 AAA compliance built into every component',
      icon: FaShield,
      badge: 'A11y'
    },
    {
      title: 'Developer Experience',
      description: 'Full TypeScript support with intelligent autocomplete',
      icon: FaLightbulb,
      badge: 'DX'
    }
  ]

  const navigationItems = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'About', href: '/about', icon: FaUser },
    { label: 'Contact', href: '/contact', icon: FaEnvelope },
    { label: 'Settings', href: '/settings', icon: FaCog, badge: '3' }
  ]

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Premium', href: '/components/premium' },
    { label: 'Examples' }
  ]

  const tabData = [
    {
      label: 'Overview',
      icon: FaHome,
      content: (
        <VStack spacing={4} align="start">
          <Text>This is the overview tab showcasing the premium component system.</Text>
          <Button variant="outline">Learn More</Button>
        </VStack>
      )
    },
    {
      label: 'Features',
      icon: FaStar,
      badge: 'New',
      content: (
        <VStack spacing={4} align="start">
          <Text>Feature highlights and capabilities of the premium system.</Text>
          <HStack>
            <Badge variant="solid" colorScheme="green">Performance</Badge>
            <Badge variant="solid" colorScheme="blue">Accessibility</Badge>
            <Badge variant="solid" colorScheme="purple">TypeScript</Badge>
          </HStack>
        </VStack>
      )
    },
    {
      label: 'Settings',
      icon: FaCog,
      content: (
        <VStack spacing={4} align="start">
          <Text>Configuration and customization options.</Text>
          <Button variant="solid" colorScheme="primary">Configure</Button>
        </VStack>
      )
    }
  ]

  return (
    <>
      {/* Hero Section with Premium Styling */}
      <Section variant="hero" background="gradient" animate>
        <Container size="xl">
          <Animation variant="fadeIn" duration={1}>
            <VStack spacing={8} textAlign="center">
              <Badge variant="glass" size="lg" icon={<FaStar />}>
                Premium Component Library
              </Badge>
              
              <Heading variant="hero" gradient glow level={1}>
                Centralized Chakra UI Architecture
              </Heading>
              
              <Text variant="lead" emphasis="subtle" maxW="4xl">
                The ultimate high-quality component system for maximum development speed and quality. 
                Built with performance, accessibility, and developer experience in mind.
              </Text>
              
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button variant="premium" size="lg" shimmer>
                  Get Started
                </Button>
                <Button variant="glass" size="lg">
                  View Documentation
                </Button>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* Navigation Demo Section */}
      <Section variant="content" padding="lg">
        <Container size="lg">
          <VStack spacing={8}>
            <Animation variant="slideUp">
              <Heading variant="section" level={2}>
                Navigation System Demo
              </Heading>
            </Animation>
            
            <Animation variant="slideUp" delay={0.2}>
              <VStack spacing={6} w="full">
                <Text variant="subtitle">Breadcrumb Navigation:</Text>
                <Breadcrumb items={breadcrumbItems} variant="arrow" />
                
                <Text variant="subtitle">Horizontal Menu:</Text>
                <NavMenu 
                  items={navigationItems} 
                  variant="horizontal" 
                  size="md" 
                />
                
                <Text variant="subtitle">Tab Interface:</Text>
                <Tabs 
                  tabs={tabData} 
                  variant="soft-rounded" 
                  colorScheme="primary" 
                />
              </VStack>
            </Animation>
          </VStack>
        </Container>
      </Section>

      {/* Features Grid with Stagger Animation */}
      <Section variant="feature" background="pattern" padding="xl">
        <Container size="lg">
          <VStack spacing={12}>
            <Animation variant="slideUp">
              <VStack spacing={4} textAlign="center">
                <Heading variant="section" level={2}>
                  Premium Features
                </Heading>
                <Text variant="lead" maxW="3xl">
                  Every component is optimized for the highest quality scores in performance, 
                  accessibility, and developer experience.
                </Text>
              </VStack>
            </Animation>
            
            <Stagger staggerDelay={0.15}>
              <Grid columns={{ base: 1, md: 3 }} spacing={8} equalHeight>
                {features.map((feature, index) => (
                  <Hover key={index} variant="lift" intensity="normal">
                    <Card variant="glass" premium p={8} h="full">
                      <VStack spacing={6} align="start" h="full">
                        <HStack>
                          <Badge 
                            variant="gradient" 
                            colorScheme="primary" 
                            size="lg"
                            icon={<feature.icon />}
                          >
                            {feature.badge}
                          </Badge>
                        </HStack>
                        
                        <VStack align="start" spacing={3} flex={1}>
                          <Heading variant="card" level={3}>
                            {feature.title}
                          </Heading>
                          <Text variant="body">
                            {feature.description}
                          </Text>
                        </VStack>
                        
                        <Button variant="outline" size="sm" w="full">
                          Learn More
                        </Button>
                      </VStack>
                    </Card>
                  </Hover>
                ))}
              </Grid>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* Typography Showcase */}
      <Section variant="content" padding="lg">
        <Container size="lg">
          <VStack spacing={8}>
            <Animation variant="slideUp">
              <Heading variant="section" level={2}>
                Typography System
              </Heading>
            </Animation>
            
            <Animation variant="slideUp" delay={0.2}>
              <Grid columns={{ base: 1, md: 2 }} spacing={8}>
                <VStack align="start" spacing={4}>
                  <Heading variant="subsection" level={3}>
                    Heading Variants
                  </Heading>
                  <Heading variant="display" level={1}>Display</Heading>
                  <Heading variant="hero" level={1}>Hero</Heading>
                  <Heading variant="section" level={2}>Section</Heading>
                  <Heading variant="subsection" level={3}>Subsection</Heading>
                  <Heading variant="card" level={4}>Card</Heading>
                </VStack>
                
                <VStack align="start" spacing={4}>
                  <Heading variant="subsection" level={3}>
                    Text Variants
                  </Heading>
                  <Text variant="lead">Lead paragraph text</Text>
                  <Text variant="body">Standard body text</Text>
                  <Text variant="caption">Caption text</Text>
                  <Text variant="label">Label text</Text>
                  <Text variant="overline">Overline text</Text>
                </VStack>
              </Grid>
            </Animation>
            
            <Animation variant="slideUp" delay={0.4}>
              <Quote variant="highlight" author="Premium User" title="Happy Developer">
                This component library has transformed our development process. 
                The quality and consistency is unmatched!
              </Quote>
            </Animation>
          </VStack>
        </Container>
      </Section>

      {/* Form Demo Section */}
      <Section variant="cta" background="glass" padding="xl">
        <Container size="md">
          <Animation variant="scaleIn">
            <Form
              variant="card"
              title="Contact Form Demo"
              subtitle="Experience the premium form system"
              onSubmit={handleFormSubmit}
              spacing={6}
            >
              <Input
                name="name"
                label="Full Name"
                placeholder="Enter your name"
                variant="glass"
                icon={FaUser}
                required
              />
              
              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                variant="glass"
                icon={FaEnvelope}
                required
                validate={(value) => {
                  if (!value.includes('@')) return 'Please enter a valid email'
                  return undefined
                }}
              />
              
              <Select
                name="topic"
                label="Topic"
                placeholder="Select a topic"
                variant="glass"
                options={[
                  { value: 'general', label: 'General Inquiry' },
                  { value: 'support', label: 'Technical Support' },
                  { value: 'feedback', label: 'Feedback' },
                  { value: 'partnership', label: 'Partnership' }
                ]}
                required
              />
              
              <Textarea
                name="message"
                label="Message"
                placeholder="Enter your message"
                variant="glass"
                rows={4}
                required
              />
              
              <Submit
                variant="premium"
                size="lg"
                fullWidth
                loading={formSubmitting}
                icon={FaEnvelope}
              >
                Send Message
              </Submit>
            </Form>
          </Animation>
        </Container>
      </Section>

      {/* Animation & Loading Demo */}
      <Section variant="content" padding="lg">
        <Container size="lg">
          <VStack spacing={8}>
            <Animation variant="slideUp">
              <Heading variant="section" level={2}>
                Animation & Loading System
              </Heading>
            </Animation>
            
            <Animation variant="slideUp" delay={0.2}>
              <Grid columns={{ base: 1, md: 2 }} spacing={8}>
                <Card variant="elevated" p={6}>
                  <VStack spacing={4}>
                    <Heading variant="card" level={3}>
                      Loading States
                    </Heading>
                    <VStack spacing={4}>
                      <Button onClick={toggleLoading}>
                        Toggle Loading Demo
                      </Button>
                      {loadingDemo && (
                        <VStack spacing={4}>
                          <Loading variant="spinner" size="md" />
                          <Loading variant="dots" size="md" />
                          <Loading variant="pulse" size="md" />
                          <Loading variant="wave" size="md" />
                          <Loading variant="bounce" size="md" />
                        </VStack>
                      )}
                    </VStack>
                  </VStack>
                </Card>
                
                <Card variant="elevated" p={6}>
                  <VStack spacing={4}>
                    <Heading variant="card" level={3}>
                      Hover Effects
                    </Heading>
                    <Grid columns={2} spacing={3}>
                      <Hover variant="lift">
                        <Button>Lift</Button>
                      </Hover>
                      <Hover variant="glow">
                        <Button>Glow</Button>
                      </Hover>
                      <Hover variant="scale">
                        <Button>Scale</Button>
                      </Hover>
                      <Hover variant="rotate">
                        <Button>Rotate</Button>
                      </Hover>
                    </Grid>
                  </VStack>
                </Card>
              </Grid>
            </Animation>
          </VStack>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section variant="cta" background="gradient" padding="xl">
        <Container size="lg">
          <Animation variant="bounceIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="primary" size="lg">
                Ready to Build Premium?
              </Badge>
              
              <Heading variant="section" level={2}>
                Start Using the Premium Component Library
              </Heading>
              
              <Text variant="lead" maxW="3xl">
                Achieve the highest quality scores with our centralized Chakra UI architecture. 
                Built for performance, accessibility, and developer happiness.
              </Text>
              
              <HStack spacing={4}>
                <Button variant="premium" size="lg" shimmer>
                  Get Started Now
                </Button>
                <Button variant="glass" size="lg">
                  View on GitHub
                </Button>
              </HStack>
              
              <HStack spacing={6} justify="center" flexWrap="wrap">
                <Badge variant="outline">50+ Components</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Accessible</Badge>
                <Badge variant="outline">Performant</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>
    </>
  )
}

export default PremiumExamplePage