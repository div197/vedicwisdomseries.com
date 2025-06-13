import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';

export default function GalleryPage() {
  // Configuration-driven styling
  const pageBg = useColorModeValue(
    siteConfig.theme.layout.page.background.light,
    siteConfig.theme.layout.page.background.dark
  );
  const cardBg = useColorModeValue('card.background', 'card.background');
  const headingColor = useColorModeValue('heading.primary', 'heading.primary');
  const textColor = useColorModeValue('text.primary', 'text.primary');
  
  // Fix for React Hooks rules - move this outside the map function
  const categoryBg = useColorModeValue('kd.canvas', 'kd.surfaceElevated');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

  const galleryImages = [
    {
      src: '/assets/gallery/ashram-1.jpg',
      alt: `${siteConfig.siteName} Sacred Ashram View`,
      category: 'Sacred Spaces'
    },
    {
      src: '/assets/gallery/meditation-1.jpg',
      alt: 'Collective Meditation',
      category: 'Spiritual Practice'
    },
    {
      src: '/assets/gallery/library-1.jpg',
      alt: 'Sacred Text Library',
      category: 'Knowledge Center'
    },
    {
      src: '/assets/gallery/yajna-1.jpg',
      alt: 'Vedic Yajna Ceremony',
      category: 'Sacred Rituals'
    },
    {
      src: '/assets/gallery/discourse-1.jpg',
      alt: 'Dharmic Discourse',
      category: 'Spiritual Teaching'
    },
    {
      src: '/assets/gallery/temple-1.jpg',
      alt: 'Temple Sanctum',
      category: 'Sacred Spaces'
    },
    {
      src: '/assets/gallery/manuscript-1.jpg',
      alt: 'Ancient Manuscript Preservation',
      category: 'Knowledge Preservation'
    },
    {
      src: '/assets/gallery/satsang-1.jpg',
      alt: 'Spiritual Satsang',
      category: 'Community Gathering'
    },
    {
      src: '/assets/gallery/study-1.jpg',
      alt: 'Vedic Study Circle',
      category: 'Learning'
    },
    {
      src: '/assets/gallery/garden-1.jpg',
      alt: 'Sacred Garden',
      category: 'Natural Sanctuary'
    },
    {
      src: '/assets/gallery/prayer-1.jpg',
      alt: 'Morning Prayer Assembly',
      category: 'Spiritual Practice'
    },
    {
      src: '/assets/gallery/festival-1.jpg',
      alt: 'Dharmic Festival Celebration',
      category: 'Sacred Festivals'
    },
    {
      src: '/assets/gallery/teaching-1.jpg',
      alt: 'Guru-Shishya Teaching',
      category: 'Traditional Learning'
    },
    {
      src: '/assets/gallery/seva-1.jpg',
      alt: 'Community Seva',
      category: 'Selfless Service'
    },
    {
      src: '/assets/gallery/kirtan-1.jpg',
      alt: 'Devotional Kirtan',
      category: 'Sacred Music'
    },
    {
      src: '/assets/gallery/workshop-1.jpg',
      alt: 'Sanskrit Workshop',
      category: 'Language Learning'
    },
    {
      src: '/assets/gallery/ceremony-1.jpg',
      alt: 'Sacred Ceremony',
      category: 'Spiritual Rituals'
    },
    {
      src: '/assets/gallery/wisdom-1.jpg',
      alt: 'Wisdom Sharing Session',
      category: 'Knowledge Sharing'
    },
    {
      src: '/assets/gallery/nature-1.jpg',
      alt: 'Peaceful Ashram Grounds',
      category: 'Natural Beauty'
    },
    {
      src: '/assets/gallery/blessing-1.jpg',
      alt: 'Spiritual Blessing Ceremony',
      category: 'Sacred Blessings'
    }
  ];

  return (
    <Box bg={pageBg} minH="100vh">
      <Helmet>
        <title>Gallery - {siteConfig.siteName}</title>
        <meta name="description" content={`Explore our sacred gallery showcasing spiritual practices, dharmic ceremonies, meditation sessions, and ashram life at ${siteConfig.siteName}. Witness our vibrant spiritual community in action.`} />
      </Helmet>

      {/* Hero Section */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }}>
        <AnimatedSection>
          <VStack spacing={6} textAlign="center" mb={16}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl', lg: '3xl' }} color={headingColor}>
              🕉️ {siteConfig.siteName} Sacred Gallery
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} maxW="4xl">
              Take a visual journey through our sacred ashram environment. From ancient wisdom teachings to 
              spiritual practices, witness the dharmic excellence and devotional culture at {siteConfig.siteName}.
            </Text>
          </VStack>
        </AnimatedSection>

        {/* Gallery Grid - Responsive 3-Column Layout */}
        <AnimatedSection>
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3 }} 
            spacing={{ base: 4, md: 6, lg: 8 }} 
            maxW="1400px"
            mx="auto"
          >
            {galleryImages.map((image, index) => (
              <Box
                key={index}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                bg={cardBg}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{ 
                  transform: 'translateY(-8px)', 
                  boxShadow: '2xl',
                  cursor: 'pointer'
                }}
                onClick={() => handleImageClick(image.src)}
                position="relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  objectFit="cover"
                  w="full"
                  h={{ base: "280px", md: "320px", lg: "350px" }}
                  loading="lazy"
                  fallbackSrc={siteConfig.assets.images.placeholder}
                />
                <Box p={{ base: 4, md: 5 }}>
                  <Text 
                    fontSize={{ base: "sm", md: "md" }} 
                    fontWeight="semibold" 
                    color={headingColor} 
                    mb={2}
                    noOfLines={2}
                  >
                    {image.alt}
                  </Text>
                  <Text 
                    fontSize={{ base: "xs", md: "sm" }} 
                    color={textColor}
                    fontWeight="medium"
                    px={2}
                    py={1}
                    bg={categoryBg}
                    borderRadius="md"
                    display="inline-block"
                  >
                    {image.category}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </AnimatedSection>

        {/* Additional Information */}
        <AnimatedSection>
          <Box mt={20} textAlign="center" bg={cardBg} borderRadius="xl" p={8} boxShadow="lg">
            <Heading as="h2" size="xl" color={headingColor} mb={6}>
              Capturing Moments of Spiritual Excellence
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="4xl" mx="auto" lineHeight="tall">
              Our gallery showcases the sacred culture at {siteConfig.siteName}. From spiritual 
              achievements to dharmic celebrations, community satsangs to daily devotional activities, these images 
              capture the essence of our spiritual community where every seeker thrives and grows in divine wisdom.
            </Text>
          </Box>
        </AnimatedSection>
      </Container>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
          <ModalCloseButton 
            color="white" 
            bg="blackAlpha.600" 
            borderRadius="full" 
            size="lg"
            _hover={{ bg: 'blackAlpha.800' }}
          />
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              maxW="100%"
              maxH="90vh"
              objectFit="contain"
              borderRadius="lg"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
} 