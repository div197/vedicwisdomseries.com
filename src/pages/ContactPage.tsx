import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Icon, 
  Link as ChakraLink, 
  SimpleGrid, 
  Image,
  useBreakpointValue,
  Card,
  CardBody,
  Badge,
  Button,
  Flex,
  useColorModeValue,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock,
  FaUsers,
  FaPhoneAlt,
  FaBuilding,
  FaGlobe,
  FaCalendarCheck,
  FaComments,
  FaHandshake,
  FaMapMarkerAlt,
  FaIndustry,
  FaCog,
  FaShippingFast,
  FaFileAlt,
  FaCertificate,
  FaTools
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { PageWrapper, HeroSectionWrapper, SectionWrapper, ContentContainer } from '../components/layout/PageWrapper';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import UniversalCTA from '../components/UniversalCTA';
import { siteConfig } from '../siteConfig';

export default function ContactPage() {
  const containerMaxW = useBreakpointValue({ base: 'container.sm', md: 'container.md', lg: 'container.xl' });
  const heroImageHeight = useBreakpointValue({ base: '300px', md: '400px', lg: '500px' });
  const spacing = useBreakpointValue({ base: 16, md: 20, lg: 24 });
  const cardSpacing = useBreakpointValue({ base: 8, md: 10, lg: 12 });

  const heroGradient = useColorModeValue(
    'linear(to-br, kd.primary, kd.secondary, kd.tertiary)',
    'linear(to-br, kd.primaryDark, kd.secondaryDark, kd.tertiaryDark)'
  );
  
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceElevated');
  const textColor = useColorModeValue('kd.text', 'kd.textSecondary');
  const headingColor = useColorModeValue('kd.heading', 'kd.textInverted');
  const accentColor = useColorModeValue('kd.primary', 'kd.secondary');

  // Contact Information Data
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Technical Support",
      description: "Speak with our industrial experts",
      items: [
        {
          label: "Export Inquiries",
          value: "+91 93586 55903",
          href: "tel:+919358655903",
          icon: FaPhone
        },
        {
          label: "Technical Support", 
          value: "+91 93586 55903",
          href: "tel:+919358655903",
          icon: FaTools
        }
      ]
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Get detailed technical information",
      items: [
        {
          label: "General Inquiries",
          value: "info@millstoneindia.com",
          href: "mailto:info@millstoneindia.com",
          icon: FaEnvelope
        }
      ]
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Business",
      description: "Quick industrial consultation",
      items: [
        {
          label: "Business WhatsApp",
          value: "+91 93586 55903",
          href: "https://wa.me/919358655903",
          icon: FaWhatsapp
        }
      ]
    }
  ];

  // Company Information
  const companyInfo = {
    name: "Millstone India",
    unit: "A Unit of Sharad Enterprises",
    address: "Jodhpur, Rajasthan, India",
    certifications: ["Government Recognized Export House", "ISO 9001:2015 Certified"],
    tradeName: "Millstone India",
    experience: "30+ Years",
    countries: "20+ Countries Served"
  };

  // Service Areas
  const serviceAreas = [
    {
      icon: FaIndustry,
      title: "Abrasives & Binders",
      description: "Silicon Carbide, Emery Grain, Aluminium Oxide",
      color: "kd.primary"
    },
    {
      icon: FaCog,
      title: "Industrial Minerals",
      description: "Magnesite, Dolomite, Bentonite, China Clay",
      color: "kd.secondary"
    },
    {
      icon: FaTools,
      title: "Flour Mill Machinery",
      description: "Aata Chakki, Millstones, Processing Equipment",
      color: "kd.tertiary"
    },
    {
      icon: FaBuilding,
      title: "Hardware Components",
      description: "Bolts, Nuts, Flanges, MS Strips",
      color: "kd.primary"
    }
  ];

  // Quick Contact Features
  const features = [
    {
      icon: FaCalendarCheck,
      title: "Expert Consultation",
      description: "Book a technical consultation session"
    },
    {
      icon: FaComments,
      title: "Product Guidance",
      description: "Get customized product recommendations"
    },
    {
      icon: FaShippingFast,
      title: "Export Support",
      description: "Complete export documentation assistance"
    },
    {
      icon: FaFileAlt,
      title: "Technical Documentation",
      description: "Detailed product specifications and catalogs"
    }
  ];

  return (
    <>
      <SEOHead
        title="Contact Millstone India - Industrial Solutions & Export Services"
        description="Contact Millstone India for industrial materials, machinery, and export services. Government Recognized Export House serving 20+ countries with ISO 9001:2015 excellence."
        keywords={['Contact Millstone India', 'Industrial Materials', 'Export Services', 'Technical Support', 'GST 08CDZPM1573Q1ZD']}
        image={`${siteConfig.siteUrl}/assets/images/contact-millstone-india.jpg`}
      />

      <PageWrapper hasHero={true}>
        {/* 🏭 INDUSTRIAL HERO SECTION - Automatic spacing below transparent header */}
        <HeroSectionWrapper>
          <Box
            minH="70vh"
            bgGradient={heroGradient}
            position="relative"
            display="flex"
            alignItems="center"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'blackAlpha.300',
              zIndex: 1
            }}
          >
            <Container maxW="7xl" position="relative" zIndex={2}>
              <VStack spacing={8} textAlign="center" color="white">
                <Icon as={FaIndustry} boxSize={16} />
                
                <VStack spacing={4}>
                  <Heading as="h1" size="2xl" fontWeight="bold">
                    Connect with Industrial Experts
                  </Heading>
                  <Text fontSize="xl" maxW="4xl" lineHeight="tall">
                    Get in touch for industrial materials, machinery, and technical expertise. 
                    Government Recognized Export House serving global manufacturing industries.
                  </Text>
                  <Text fontSize="lg" fontStyle="italic" opacity={0.9}>
                    "The Foundation of Your Finish" - Expert Industrial Solutions
                  </Text>
                </VStack>

                <UniversalCTA variant="hero" size="lg" />
              </VStack>
            </Container>
          </Box>
        </HeroSectionWrapper>

        {/* 🏭 CONTACT METHODS SECTION - Automatic spacing after hero */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Get in Touch
              </Badge>
              <Heading size="xl" color={headingColor}>
                Connect with Our Industrial Team
              </Heading>
              <Text color={textColor} maxW="4xl" fontSize="lg" lineHeight="tall">
                Our technical experts are ready to assist with your industrial requirements, 
                export inquiries, and customized solutions.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {contactMethods.map((method, index) => (
                <Card key={index} bg={cardBg} borderWidth="1px" borderColor="kd.border" _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }} transition="all 0.3s">
                  <CardBody p={8}>
                    <VStack spacing={6} align="center" textAlign="center">
                      <Icon as={method.icon} boxSize={12} color="kd.primary" />
                      <VStack spacing={3}>
                        <Heading size="md" color={headingColor}>
                          {method.title}
                        </Heading>
                        <Text color={textColor} fontSize="sm">
                          {method.description}
                        </Text>
                      </VStack>
                      <VStack spacing={3} w="full">
                        {method.items.map((item, itemIndex) => (
                          <ChakraLink
                            key={itemIndex}
                            href={item.href}
                            _hover={{ textDecoration: 'none' }}
                            w="full"
                          >
                      <Button 
                        variant="outline" 
                        colorScheme="primary" 
                        size="sm"
                        w="full"
                              leftIcon={<Icon as={item.icon} />}
                            >
                              <VStack spacing={1}>
                                <Text fontSize="xs" opacity={0.8}>
                                  {item.label}
                                </Text>
                                <Text fontSize="sm" fontWeight="bold">
                                  {item.value}
                                </Text>
                              </VStack>
                      </Button>
                          </ChakraLink>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🏭 CONTACT FORM SECTION */}
        <SectionWrapper bg={cardBg}>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Send Message
              </Badge>
              <Heading size="xl" color={headingColor}>
                Request Industrial Consultation
              </Heading>
              <Text color={textColor} maxW="4xl" fontSize="lg" lineHeight="tall">
                Tell us about your industrial requirements and how we can provide customized solutions for your business.
              </Text>
            </VStack>

            <Container maxW="2xl">
              <VStack spacing={6} as="form">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  <FormControl>
                    <FormLabel color={headingColor}>Full Name</FormLabel>
                    <Input 
                      placeholder="Your full name"
                      bg="kd.surface"
                      borderColor="kd.border"
                      _focus={{ borderColor: "kd.primary" }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={headingColor}>Email Address</FormLabel>
                    <Input 
                      type="email"
                      placeholder="your.email@company.com"
                      bg="kd.surface"
                      borderColor="kd.border"
                      _focus={{ borderColor: "kd.primary" }}
                    />
                  </FormControl>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  <FormControl>
                    <FormLabel color={headingColor}>Phone Number</FormLabel>
                    <Input 
                      placeholder="+91 XXXXX XXXXX"
                      bg="kd.surface"
                      borderColor="kd.border"
                      _focus={{ borderColor: "kd.primary" }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={headingColor}>Industry Type</FormLabel>
                    <Select 
                      placeholder="Select your industry"
                      bg="kd.surface"
                      borderColor="kd.border"
                      _focus={{ borderColor: "kd.primary" }}
                    >
                      <option value="abrasives">Abrasives & Grinding</option>
                      <option value="minerals">Industrial Minerals</option>
                      <option value="flour-mill">Flour Mill & Food Processing</option>
                      <option value="manufacturing">General Manufacturing</option>
                      <option value="export">Export/Import Business</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>

                  <FormControl>
                  <FormLabel color={headingColor}>Your Requirements</FormLabel>
                    <Textarea 
                    placeholder="Please describe your industrial requirements, quantities, specifications, and any specific questions you have..."
                    rows={6}
                    bg="kd.surface"
                    borderColor="kd.border"
                    _focus={{ borderColor: "kd.primary" }}
                    />
                  </FormControl>

                <Button
                  colorScheme="primary"
                  size="lg"
                  w="full"
                  leftIcon={<Icon as={FaEnvelope} />}
                >
                  Send Inquiry
                  </Button>

                  <Text fontSize="sm" color={textColor} textAlign="center">
                  We typically respond within 24 hours with detailed technical information and quotations.
                  </Text>
                </VStack>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🏭 COMPANY INFO SECTION */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="tertiary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Company Information
              </Badge>
              <Heading size="xl" color={headingColor}>
                About Millstone India
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <VStack spacing={6} align="start">
                <VStack align="start" spacing={4}>
                  <Heading size="lg" color={headingColor}>
                    {companyInfo.name}
                        </Heading>
                  <Text color={textColor} fontSize="md">
                    {companyInfo.unit}
                  </Text>
                  <HStack spacing={2}>
                    <Icon as={FaMapMarkerAlt} color="kd.primary" />
                    <Text color={textColor} fontSize="md">
                      {companyInfo.address}
                        </Text>
                  </HStack>
                </VStack>

                <VStack align="start" spacing={3}>
                  <Text color={headingColor} fontWeight="bold">Certifications & Recognition:</Text>
                  {companyInfo.certifications.map((cert, index) => (
                    <HStack key={index} spacing={2}>
                      <Icon as={FaCertificate} color="kd.tertiary" />
                      <Text color={textColor} fontSize="sm">{cert}</Text>
                    </HStack>
                  ))}
                </VStack>

                <SimpleGrid columns={2} spacing={4} w="full">
                  <VStack spacing={2} align="start">
                    <Text color={headingColor} fontWeight="bold" fontSize="sm">Trade Name:</Text>
                    <Text color={textColor} fontSize="sm">{companyInfo.tradeName}</Text>
                  </VStack>
                  <VStack spacing={2} align="start">
                    <Text color={headingColor} fontWeight="bold" fontSize="sm">Experience:</Text>
                    <Text color={textColor} fontSize="sm">{companyInfo.experience}</Text>
                  </VStack>
                  <VStack spacing={2} align="start">
                    <Text color={headingColor} fontWeight="bold" fontSize="sm">Global Reach:</Text>
                    <Text color={textColor} fontSize="sm">{companyInfo.countries}</Text>
                  </VStack>
                  <VStack spacing={2} align="start">
                    <Text color={headingColor} fontWeight="bold" fontSize="sm">Specialization:</Text>
                    <Text color={textColor} fontSize="sm">Industrial Materials</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>

              <SimpleGrid columns={1} spacing={4}>
                <Heading size="md" color={headingColor} textAlign="center">
                  Our Service Areas
                </Heading>
                {serviceAreas.map((area, index) => (
                  <HStack key={index} spacing={4} p={4} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor="kd.border">
                    <Icon as={area.icon} w={8} h={8} color={area.color} flexShrink={0} />
                    <VStack align="start" spacing={1}>
                      <Text color={headingColor} fontWeight="bold" fontSize="sm">
                        {area.title}
                        </Text>
                        <Text color={textColor} fontSize="xs">
                        {area.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🏭 QUICK FEATURES SECTION */}
        <SectionWrapper bg={cardBg}>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Why Choose Us
              </Badge>
              <Heading size="xl" color={headingColor}>
                Industrial Partnership Benefits
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="full">
              {features.map((feature, index) => (
                <VStack key={index} spacing={4} textAlign="center" p={6} bg="kd.surface" borderRadius="lg" borderWidth="1px" borderColor="kd.border">
                  <Icon as={feature.icon} w={10} h={10} color="kd.secondary" />
                  <VStack spacing={2}>
                    <Heading size="sm" color={headingColor}>
                      {feature.title}
                    </Heading>
                    <Text color={textColor} fontSize="xs" textAlign="center">
                      {feature.description}
                        </Text>
                      </VStack>
                    </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🏭 UNIVERSAL CTA */}
        <UniversalCTA />
      </PageWrapper>
    </>
  );
} 