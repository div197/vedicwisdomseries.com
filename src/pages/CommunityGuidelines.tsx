/**
 * 🕉️ COMMUNITY GUIDELINES PAGE
 * Dr. Nagori: "Dignity of Vedas must NOT be hurt by anyone"
 * Following YouTube and Meta community standards
 */

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Alert,
  AlertIcon,
  Divider,
  Badge,
  Card,
  CardBody,
  Icon,
  HStack
} from '@chakra-ui/react';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaOm, 
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaGlobe
} from 'react-icons/fa';
import { PageWrapper } from '../components/layout/PageWrapper';
import SEOHead from '../components/SEOHead';

const CommunityGuidelines: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Community Guidelines - Vedic Wisdom Series"
        description="Our community guidelines ensure respectful discourse while maintaining the dignity of Vedic teachings. Open to all seekers regardless of background."
        keywords={['community guidelines', 'vedic community', 'respectful discourse', 'spiritual community']}
      />

      <PageWrapper>
        <Container maxW="4xl" py={16}>
          <VStack spacing={10} align="stretch">
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Icon as={FaShieldAlt} boxSize={12} color="orange.500" />
              <Heading size="2xl">Community Guidelines</Heading>
              <Text fontSize="xl" color="gray.600">
                Maintaining the Sacred Space for All Seekers
              </Text>
            </VStack>

            {/* Core Principle */}
            <Alert status="info" variant="left-accent" borderRadius="md">
              <AlertIcon />
              <Box>
                <Text fontWeight="bold">Dr. Nischaya Nagori's Vision:</Text>
                <Text>
                  "It's open and accessible for all, but the dignity of the platform must remain 
                  as we are into the Vedic Platform, and Dignity of Vedas must NOT be hurt by anyone."
                </Text>
              </Box>
            </Alert>

            {/* Welcome Statement */}
            <Card variant="filled" bg="orange.50">
              <CardBody>
                <VStack spacing={3} align="start">
                  <HStack>
                    <Icon as={FaGlobe} color="orange.500" />
                    <Heading size="md">All Are Welcome</Heading>
                  </HStack>
                  <Text>
                    Whether you're interested in Vedas, Puranas, Spirituality, Buddhism, Taoism, 
                    Shintoism, or completely new to ancient wisdom - this platform is for YOU. 
                    No prior knowledge required, just genuine curiosity and respect.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Divider />

            {/* Encouraged Behaviors */}
            <VStack spacing={4} align="stretch">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" boxSize={6} />
                <Heading size="lg">Encouraged in Our Community</Heading>
              </HStack>
              
              <List spacing={3}>
                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Respectful Inquiry</Text>
                    <Text fontSize="sm" color="gray.600">
                      Ask questions freely, even challenging ones, with genuine desire to understand
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Sharing Personal Experiences</Text>
                    <Text fontSize="sm" color="gray.600">
                      Share your spiritual journey and transformations to inspire others
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Scientific Discussion</Text>
                    <Text fontSize="sm" color="gray.600">
                      Explore unlimited parallels between science and spirituality
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Cross-Cultural Exchange</Text>
                    <Text fontSize="sm" color="gray.600">
                      Share wisdom from all traditions - Buddhism, Taoism, Shintoism, etc.
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Supporting Fellow Seekers</Text>
                    <Text fontSize="sm" color="gray.600">
                      Help others with pronunciation, understanding, and practice
                    </Text>
                  </Box>
                </ListItem>
              </List>
            </VStack>

            <Divider />

            {/* Prohibited Behaviors */}
            <VStack spacing={4} align="stretch">
              <HStack>
                <Icon as={FaTimesCircle} color="red.500" boxSize={6} />
                <Heading size="lg">Not Acceptable</Heading>
              </HStack>
              
              <List spacing={3}>
                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaTimesCircle} color="red.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Disrespecting Vedic Traditions</Text>
                    <Text fontSize="sm" color="gray.600">
                      Mockery, deliberate misrepresentation, or denigration of Vedic teachings
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaTimesCircle} color="red.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Hate Speech or Discrimination</Text>
                    <Text fontSize="sm" color="gray.600">
                      Based on religion, race, nationality, gender, or any other factor
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaTimesCircle} color="red.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Commercial Exploitation</Text>
                    <Text fontSize="sm" color="gray.600">
                      Using the platform for unrelated business promotion or spam
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaTimesCircle} color="red.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">False Representation</Text>
                    <Text fontSize="sm" color="gray.600">
                      Claiming false credentials or misrepresenting teachings
                    </Text>
                  </Box>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon as={FaTimesCircle} color="red.500" mt={1} />
                  <Box>
                    <Text fontWeight="bold">Violating Platform Policies</Text>
                    <Text fontSize="sm" color="gray.600">
                      Breaking YouTube, Meta, or other platform-specific guidelines
                    </Text>
                  </Box>
                </ListItem>
              </List>
            </VStack>

            <Divider />

            {/* Enforcement */}
            <VStack spacing={4} align="stretch">
              <Heading size="lg">Enforcement</Heading>
              
              <Text>
                We follow a progressive approach to maintain community harmony:
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Badge colorScheme="yellow" mr={2}>1st Violation</Badge>
                  Gentle reminder and education about guidelines
                </ListItem>
                <ListItem>
                  <Badge colorScheme="orange" mr={2}>2nd Violation</Badge>
                  Temporary restriction from commenting/participating
                </ListItem>
                <ListItem>
                  <Badge colorScheme="red" mr={2}>3rd Violation</Badge>
                  Permanent removal from the community
                </ListItem>
              </List>

              <Alert status="warning" variant="subtle" borderRadius="md">
                <AlertIcon />
                <Text fontSize="sm">
                  Severe violations (hate speech, threats, etc.) result in immediate removal
                  and reporting to relevant platforms.
                </Text>
              </Alert>
            </VStack>

            <Divider />

            {/* Platform Standards */}
            <VStack spacing={4} align="stretch">
              <Heading size="lg">Platform-Specific Standards</Heading>
              
              <Text>
                We strictly follow community guidelines of all platforms:
              </Text>

              <VStack spacing={3} align="stretch">
                <Card variant="outline">
                  <CardBody>
                    <HStack>
                      <Icon as={FaUsers} color="red.500" />
                      <Text fontWeight="bold">YouTube Community Guidelines</Text>
                    </HStack>
                    <List spacing={1} mt={2} fontSize="sm">
                      <ListItem>• No harmful or dangerous content</ListItem>
                      <ListItem>• No hate speech or cyberbullying</ListItem>
                      <ListItem>• No spam or deceptive practices</ListItem>
                      <ListItem>• Respect copyright and privacy</ListItem>
                    </List>
                  </CardBody>
                </Card>

                <Card variant="outline">
                  <CardBody>
                    <HStack>
                      <Icon as={FaUsers} color="blue.500" />
                      <Text fontWeight="bold">Meta (Facebook/Instagram) Standards</Text>
                    </HStack>
                    <List spacing={1} mt={2} fontSize="sm">
                      <ListItem>• Authentic identity and behavior</ListItem>
                      <ListItem>• Safety and dignity for all</ListItem>
                      <ListItem>• No false information</ListItem>
                      <ListItem>• Respect intellectual property</ListItem>
                    </List>
                  </CardBody>
                </Card>
              </VStack>
            </VStack>

            <Divider />

            {/* Closing Message */}
            <Card bg="purple.50" borderColor="purple.200" borderWidth={1}>
              <CardBody>
                <VStack spacing={3}>
                  <Icon as={FaHeart} color="purple.500" boxSize={8} />
                  <Text fontSize="lg" fontWeight="medium" textAlign="center">
                    Together, We Create a Sacred Space
                  </Text>
                  <Text textAlign="center" color="gray.700">
                    Our community thrives on mutual respect, genuine curiosity, and shared wisdom.
                    By following these guidelines, we ensure that everyone can explore the profound
                    depths of Vedic knowledge in a supportive environment.
                  </Text>
                  <Text fontStyle="italic" color="purple.700">
                    "सर्वे भवन्तु सुखिनः" - May all beings be happy
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </PageWrapper>
    </>
  );
};

export default CommunityGuidelines;