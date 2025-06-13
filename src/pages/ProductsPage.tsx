import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Badge, VStack, HStack, 
  Image, Button, Icon, Stat, StatLabel, StatNumber, StatHelpText, Flex, Divider,
  useColorModeValue, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaIndustry, FaCog, FaTools, FaShippingFast, FaCertificate, FaGlobe, FaPhone, FaDownload } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation } from '../hooks/useSlideAnimations';
import { siteConfig } from '../siteConfig';

const ProductsPage: React.FC = () => {
  // Color scheme
  const headingColor = useColorModeValue('kd.heading', 'kd.headingDark');
  const textColor = useColorModeValue('kd.text', 'kd.textDark');
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceDark');
  const accentColor = useColorModeValue('kd.tertiary', 'kd.tertiaryDark');
  const heroGradient = "linear(to-br, kd.primary, kd.secondary, kd.tertiary)";

  // Animations
  const heroAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 800, delay: 200 });
  const statsAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 700, delay: 400 });
  const categoriesAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 800, delay: 300 });

  // Enhanced product categories with technical specifications
  const productCategories = [
    {
      id: "abrasives",
      category: "Abrasives & Binders",
      tagline: "The Agents of Transformation",
      description: "Premium abrasive materials and specialized binding agents for superior grinding, polishing, and finishing applications across diverse industrial sectors.",
      image: "/assets/images/products/1.jpeg", // Stone mill grinding surface
      icon: FaTools,
      color: "kd.primary",
      applications: ["Precision Grinding", "Surface Finishing", "Industrial Polishing", "Material Shaping"],
      certifications: ["ISO 9001:2015", "Export Quality"],
      products: [
        { 
          name: "Silicon Carbide", 
          hsn: "28492010",
          grade: "Industrial Grade",
          mesh: "Various (16-220)",
          purity: "98.5%+",
          applications: "Grinding wheels, abrasive papers, refractory materials"
        },
        { 
          name: "Natural Emery Grain / Flint", 
          hsn: "25171020",
          grade: "Premium Natural",
          mesh: "8-120",
          hardness: "7-9 Mohs",
          applications: "Non-slip surfaces, abrasive cloths, grinding stones"
        },
        { 
          name: "Millstone Production Emery Grain", 
          hsn: "25132010",
          grade: "Millstone Specific",
          mesh: "Custom",
          origin: "Rajasthan Mines",
          applications: "Traditional flour mill stones, grain processing"
        },
        { 
          name: "Aluminium Oxide", 
          hsn: "28182090",
          grade: "Technical Grade",
          purity: "99%+",
          mesh: "Various",
          applications: "Precision grinding, polishing compounds, ceramics"
        },
        { 
          name: "Oxychloride Binder", 
          hsn: "34029019",
          type: "Magnesium Based",
          strength: "High Bond",
          curing: "Air Setting",
          applications: "Grinding wheel manufacturing, abrasive bonding"
        },
        { 
          name: "Carbon Black Oxide", 
          hsn: "28030010",
          grade: "Industrial",
          particle: "Fine",
          purity: "95%+",
          applications: "Rubber reinforcement, pigments, conductive materials"
        },
        { 
          name: "Mould Releasing Wax", 
          hsn: "34052000",
          type: "Industrial Grade",
          melting: "60-80°C",
          form: "Solid/Liquid",
          applications: "Casting, molding, release agent"
        }
      ]
    },
    {
      id: "minerals",
      category: "Industrial Minerals",
      tagline: "The Essence of the Earth",
      description: "High-grade industrial minerals sourced from premium deposits, processed to exact specifications for diverse manufacturing and processing applications.",
      image: "/assets/images/products/5.jpeg", // Export container showing quality
      icon: FaIndustry,
      color: "kd.secondary",
      applications: ["Refractory Materials", "Chemical Processing", "Construction", "Agriculture"],
      certifications: ["Government Recognized", "Export House"],
      products: [
        { 
          name: "Caustic Calcined Magnesite", 
          hsn: "25199040",
          grade: "CCM 85-97%",
          mgo: "85-97%",
          cao: "1.5-3%",
          applications: "Refractory bricks, steel making, chemical industry"
        },
        { 
          name: "Dolomite Powder", 
          hsn: "25181000",
          grade: "Industrial",
          mesh: "100-325",
          cao: "30-32%",
          applications: "Steel making, glass industry, ceramics, agriculture"
        },
        { 
          name: "Bentonite Powder", 
          hsn: "25091090",
          type: "Sodium/Calcium",
          mesh: "200-325",
          moisture: "<12%",
          applications: "Drilling mud, foundry, civil engineering, cosmetics"
        },
        { 
          name: "China Clay (Kaolin)", 
          hsn: "25070010",
          grade: "Ceramic Grade",
          al2o3: "36-38%",
          whiteness: "80-85%",
          applications: "Ceramics, paper, paint, rubber, cosmetics"
        },
        { 
          name: "Magnesium Chloride Flakes", 
          hsn: "28273100",
          purity: "46-47%",
          form: "Flakes/Powder",
          solubility: "High",
          applications: "De-icing, dust control, chemical synthesis"
        },
        { 
          name: "Magnesium Sulphate", 
          hsn: "25302000",
          grade: "Technical/Agricultural",
          purity: "99%+",
          form: "Crystals/Powder",
          applications: "Agriculture, pharmaceuticals, textiles, paper"
        },
        { 
          name: "Henna Powder", 
          hsn: "33059090",
          grade: "Export Quality",
          mesh: "100-200",
          origin: "Rajasthan",
          applications: "Cosmetics, hair care, natural dyes, traditional medicine"
        }
      ]
    },
    {
      id: "machinery",
      category: "Flour Mill Machinery",
      tagline: "The Engines of Industry",
      description: "Traditional and modern flour mill machinery combining time-tested craftsmanship with precision engineering for optimal grain processing efficiency.",
      image: "/assets/images/products/2.jpeg", // Mill stone with grooves
      icon: FaCog,
      color: "kd.tertiary",
      applications: ["Grain Processing", "Flour Production", "Spice Grinding", "Traditional Milling"],
      certifications: ["Traditional Craftsmanship", "Modern Engineering"],
      products: [
        { 
          name: "Flour Mill Machinery - Aata Chakki", 
          hsn: "84378010",
          type: "Traditional/Modern",
          capacity: "5-100 kg/hr",
          power: "1-15 HP",
          applications: "Wheat flour, grain processing, commercial milling"
        },
        { 
          name: "Flour Mill Stone", 
          hsn: "84379010",
          material: "Natural Stone",
          diameter: "12\"-36\"",
          surface: "Hand Carved Grooves",
          applications: "Traditional flour mills, grain grinding, spice processing"
        }
      ]
    },
    {
      id: "hardware",
      category: "Hardware & Components",
      tagline: "The Unseen Strength",
      description: "Essential industrial hardware components manufactured to precise specifications, ensuring reliable performance in demanding industrial applications.",
      image: "/assets/images/products/3.jpeg", // Pulley wheel component
      icon: FaTools,
      color: "kd.primary",
      applications: ["Industrial Assembly", "Machinery Components", "Structural Support", "Mechanical Systems"],
      certifications: ["Quality Tested", "Industrial Grade"],
      products: [
        { 
          name: "Bolts, Nuts, Union Tread", 
          hsn: "73181900",
          material: "Carbon Steel/SS",
          grade: "8.8/10.9",
          coating: "Zinc Plated/Hot Dip",
          applications: "Industrial assembly, machinery, structural connections"
        },
        { 
          name: "Cast Iron Flange", 
          hsn: "73259910",
          material: "Cast Iron",
          pressure: "PN10-PN40",
          standard: "IS/ANSI/DIN",
          applications: "Pipe connections, industrial piping, machinery mounting"
        },
        { 
          name: "M.S. Strip", 
          hsn: "72112950",
          material: "Mild Steel",
          thickness: "1-10mm",
          width: "10-200mm",
          applications: "Industrial fabrication, machinery parts, structural components"
        }
      ]
    }
  ];

  // Industrial statistics
  const industrialStats = [
    { label: "Product Categories", value: "50+", trend: "Comprehensive Range" },
    { label: "Countries Served", value: "20+", trend: "Global Reach" },
    { label: "Years Experience", value: "30+", trend: "Proven Excellence" },
    { label: "Quality Certified", value: "ISO 9001:2015", trend: "International Standards" }
  ];

  return (
    <PageWrapper hasHero={true}>
      <SEOHead
        title="Industrial Products - Millstone India | Abrasives, Minerals & Machinery"
        description="Premium industrial materials: Silicon Carbide, Emery Grain, Dolomite, Bentonite, Flour Mill Machinery. Government Recognized Export House with ISO 9001:2015 certification."
        keywords={['Industrial Products', 'Abrasives', 'Minerals', 'Flour Mill Machinery', 'Export Quality', 'ISO Certified']}
      />
      
      {/* 🏭 INDUSTRIAL HERO SECTION */}
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
            <VStack spacing={8} textAlign="center" color="white" ref={heroAnimation.ref} style={heroAnimation.style}>
              <Icon as={FaIndustry} boxSize={16} />
              
              <VStack spacing={4}>
                <Heading as="h1" size="2xl" fontWeight="bold">
                  Industrial Products Catalog
                </Heading>
                <Text fontSize="xl" maxW="4xl" lineHeight="tall">
                  The Foundation of Your Finish - Comprehensive range of industrial materials, 
                  machinery, and expert technical solutions serving global manufacturing industries.
                </Text>
                <Text fontSize="lg" fontStyle="italic" opacity={0.9}>
                  "Expert Craftsmen • Premium Quality • Global Standards"
                </Text>
              </VStack>

              <UniversalCTA variant="hero" size="lg" />
            </VStack>
          </Container>
        </Box>
      </HeroSectionWrapper>

      {/* 🏭 INDUSTRIAL STATISTICS SECTION */}
      <SectionWrapper>
        <VStack spacing={8}>
          <Heading size="xl" color={headingColor} textAlign="center">
            Industrial Excellence by Numbers
          </Heading>
          
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full" ref={statsAnimation.ref} style={statsAnimation.style}>
            {industrialStats.map((stat, index) => (
              <Card key={index} bg={cardBg} textAlign="center" shadow="md">
                <CardBody>
                  <Stat>
                    <StatNumber fontSize="2xl" fontWeight="bold" color={accentColor}>
                      {stat.value}
                    </StatNumber>
                    <StatLabel fontSize="sm" color={headingColor} fontWeight="medium">
                      {stat.label}
                    </StatLabel>
                    <StatHelpText fontSize="xs" color={textColor}>
                      {stat.trend}
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* 🏭 PRODUCT CATEGORIES SECTION */}
      <SectionWrapper>
        <VStack spacing={12} ref={categoriesAnimation.ref} style={categoriesAnimation.style}>
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
              Product Categories
            </Badge>
            <Heading size="xl" color={headingColor}>
              Industrial Excellence Portfolio
            </Heading>
            <Text color={textColor} maxW="4xl" fontSize="lg" lineHeight="tall">
              Four specialized categories of industrial products, each crafted with precision 
              and backed by decades of expertise in serving global manufacturing industries.
            </Text>
          </VStack>

          <VStack spacing={16} w="full">
            {productCategories.map((category, index) => {
              const isEven = index % 2 === 0;
              return (
                <Card key={category.id} bg={cardBg} shadow="lg" w="full" overflow="hidden">
                  <CardBody p={0}>
                    <Grid templateColumns={{ base: "1fr", lg: isEven ? "1fr 1fr" : "1fr 1fr" }} gap={0}>
                      {/* Image Section */}
                      <GridItem order={{ base: 1, lg: isEven ? 1 : 2 }}>
                        <AspectRatio ratio={4/3}>
                          <Image 
                            src={category.image}
                            alt={`${category.category} - Millstone India`}
                            objectFit="cover"
                            w="full"
                            h="full"
                          />
                        </AspectRatio>
                      </GridItem>

                      {/* Content Section */}
                      <GridItem order={{ base: 2, lg: isEven ? 2 : 1 }} p={8}>
                        <VStack align="start" spacing={6} h="full" justify="center">
                          <VStack align="start" spacing={3}>
                            <HStack>
                              <Icon as={category.icon} boxSize={6} color={category.color} />
                              <Badge bg={category.color} color="white" px={3} py={1}>
                                {category.tagline}
                              </Badge>
                            </HStack>
                            
                            <Heading size="lg" color={headingColor}>
                              {category.category}
                            </Heading>
                            
                            <Text color={textColor} lineHeight="tall">
                              {category.description}
                            </Text>
                          </VStack>

                          <VStack align="start" spacing={3} w="full">
                            <Text fontWeight="bold" color={headingColor} fontSize="sm">
                              Key Applications:
                            </Text>
                            <SimpleGrid columns={2} spacing={2} w="full">
                              {category.applications.map((app, appIndex) => (
                                <Badge key={appIndex} variant="outline" colorScheme="gray" fontSize="xs">
                                  {app}
                                </Badge>
                              ))}
                            </SimpleGrid>
                          </VStack>

                          <HStack spacing={4}>
                            <Button 
                              variant="solid" 
                              bg={category.color} 
                              color="white"
                              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                              leftIcon={<Icon as={FaDownload} />}
                              size="sm"
                            >
                              Product Specs
                            </Button>
                            <Button 
                              variant="outline" 
                              borderColor={category.color}
                              color={category.color}
                              _hover={{ bg: category.color, color: 'white' }}
                              leftIcon={<Icon as={FaPhone} />}
                              size="sm"
                            >
                              Get Quote
                            </Button>
                          </HStack>

                          <HStack spacing={3}>
                            {category.certifications.map((cert, certIndex) => (
                              <HStack key={certIndex} spacing={1}>
                                <Icon as={FaCertificate} boxSize={3} color="green.500" />
                                <Text fontSize="xs" color={textColor}>{cert}</Text>
                              </HStack>
                            ))}
                          </HStack>
                        </VStack>
                      </GridItem>
                    </Grid>
                  </CardBody>
                </Card>
              );
            })}
          </VStack>
        </VStack>
      </SectionWrapper>

      {/* 🏭 EXPORT EXCELLENCE SECTION */}
      <SectionWrapper bg={cardBg}>
        <VStack spacing={8}>
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="tertiary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
              Export Excellence
            </Badge>
            <Heading size="xl" color={headingColor}>
              Global Industrial Standards
            </Heading>
            <Text color={textColor} maxW="3xl" fontSize="lg" lineHeight="tall">
              Government Recognized Export House with ISO 9001:2015 certification, 
              serving manufacturing industries across 20+ countries with consistent quality.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaGlobe} boxSize={12} color="kd.primary" />
                  <Heading size="md" color={headingColor}>Global Reach</Heading>
                  <Text color={textColor} fontSize="sm">
                    Serving 20+ countries with reliable supply chains and international quality standards.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaCertificate} boxSize={12} color="kd.secondary" />
                  <Heading size="md" color={headingColor}>Quality Certified</Heading>
                  <Text color={textColor} fontSize="sm">
                    ISO 9001:2015 certified processes ensuring consistent quality and customer satisfaction.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaShippingFast} boxSize={12} color="kd.tertiary" />
                  <Heading size="md" color={headingColor}>Export House</Heading>
                  <Text color={textColor} fontSize="sm">
                    Government Recognized Export House with complete documentation and logistics support.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* 🏭 UNIVERSAL CTA */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default ProductsPage; 