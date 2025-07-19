import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  SimpleGrid,
  Icon, 
  Badge,
  Card,
  CardBody,
  Button,
  Flex,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Wrap,
  WrapItem,
  Tag,
  TagLeftIcon,
  TagLabel,
  useToast
} from '@chakra-ui/react';
import { 
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaBook,
  FaMeditation,
  FaGraduationCap,
  FaHeart,
  FaCheckCircle,
  FaInfoCircle,
  FaMoon,
  FaSun,
  FaVideo,
  FaUsers,
  FaOm,
  FaCalendarCheck
} from 'react-icons/fa';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import SEOHead from '../components/SEOHead';
import UniversalCTA from '../components/UniversalCTA';
import { siteConfig } from '../siteConfig';
import { vedicWisdomSeries } from '../data/vedicWisdomSeries';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';

export default function SchedulePage() {
  const [selectedTimezone, setSelectedTimezone] = useState('IST');
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = current month
  const toast = useToast();

  // DIVINE COLOR SYSTEM
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, green.50, yellow.50)',
    'linear(to-br, gray.900, gray.800, gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const tableBg = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  // ANIMATIONS
  const heroAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const scheduleAnimation = useSlideAnimation({ ...slideAnimationConfigs.fromBottom, delay: 200 });

  // TIMEZONE CONVERSIONS
  const timezones = [
    { value: 'PST', label: 'Pacific Time (PST)', offset: -8 },
    { value: 'MST', label: 'Mountain Time (MST)', offset: -7 },
    { value: 'CST', label: 'Central Time (CST)', offset: -6 },
    { value: 'EST', label: 'Eastern Time (EST)', offset: -5 },
    { value: 'GMT', label: 'GMT/UTC', offset: 0 },
    { value: 'IST', label: 'India Standard Time', offset: 5.5 },
    { value: 'JST', label: 'Japan Time', offset: 9 },
    { value: 'AEST', label: 'Australia Eastern', offset: 10 }
  ];

  // PROGRAM SCHEDULE DATA
  const weeklySchedule = {
    monday: [
      {
        program: "Chanting Classes",
        time: "19:00", // IST
        duration: "60 min",
        icon: FaMeditation,
        color: "blue",
        instructor: "Dr. Nischaya Nagori",
        level: "All Levels",
        spots: "15 spots remaining"
      }
    ],
    tuesday: [
      {
        program: "Chanting Classes",
        time: "19:00",
        duration: "60 min",
        icon: FaMeditation,
        color: "blue",
        instructor: "Dr. Nischaya Nagori",
        level: "All Levels",
        spots: "12 spots remaining"
      }
    ],
    wednesday: [],
    thursday: [
      {
        program: "Chanting Classes",
        time: "19:00",
        duration: "60 min",
        icon: FaMeditation,
        color: "blue",
        instructor: "Dr. Nischaya Nagori",
        level: "All Levels",
        spots: "18 spots remaining"
      }
    ],
    friday: [
      {
        program: "Teacher Training",
        time: "18:00",
        duration: "60 min",
        icon: FaGraduationCap,
        color: "green",
        instructor: "Dr. Nischaya Nagori",
        level: "Certification Program",
        spots: "5 spots remaining"
      }
    ],
    saturday: [
      {
        program: "Weekend Discourse",
        time: "10:00",
        duration: "60 min",
        icon: FaBook,
        color: "orange",
        instructor: "Dr. Nischaya Nagori",
        level: "Open to All",
        topic: "Quantum Consciousness & Bhagavad Gita",
        spots: "25 spots remaining"
      },
      {
        program: "Special Q&A Session",
        time: "11:30",
        duration: "30 min",
        icon: FaUsers,
        color: "purple",
        instructor: "Dr. Nischaya Nagori",
        level: "Discourse Attendees",
        spots: "Unlimited"
      }
    ],
    sunday: [
      {
        program: "Weekend Discourse",
        time: "10:00",
        duration: "60 min",
        icon: FaBook,
        color: "orange",
        instructor: "Dr. Nischaya Nagori",
        level: "Open to All",
        topic: "Scientific Spirituality & Vedanta",
        spots: "20 spots remaining"
      },
      {
        program: "Community Meditation",
        time: "17:00",
        duration: "45 min",
        icon: FaOm,
        color: "purple",
        instructor: "Senior Students",
        level: "All Welcome",
        spots: "Unlimited"
      }
    ]
  };

  // SPECIAL EVENTS
  const specialEvents = [
    {
      date: "December 21, 2024",
      event: "Winter Solstice Special Discourse",
      description: "Align with cosmic rhythms through ancient wisdom",
      time: "06:00 IST",
      icon: FaSun,
      color: "yellow",
      price: "Free for all students"
    },
    {
      date: "January 14, 2025",
      event: "Makar Sankranti Celebration",
      description: "Special chanting session for new beginnings",
      time: "10:00 IST",
      icon: FaOm,
      color: "orange",
      price: "$15 special rate"
    },
    {
      date: "February 1, 2025",
      event: "New Teacher Training Cohort",
      description: "15-week certification program begins",
      time: "18:00 IST",
      icon: FaGraduationCap,
      color: "green",
      price: "$100 (limited to 50 students)"
    }
  ];

  // Convert time based on timezone
  const convertTime = (istTime: string, toTimezone: string) => {
    // Simple conversion logic (in real app, use moment-timezone)
    const [hours, minutes] = istTime.split(':').map(Number);
    const fromOffset = 5.5; // IST offset
    const toOffset = timezones.find(tz => tz.value === toTimezone)?.offset || 0;
    const diffHours = toOffset - fromOffset;
    
    let newHours = hours + diffHours;
    if (newHours < 0) newHours += 24;
    if (newHours >= 24) newHours -= 24;
    
    return `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleBooking = (program: string, day: string) => {
    toast({
      title: "Redirecting to booking...",
      description: `Taking you to book ${program} for ${day}`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    // In real app, navigate to booking page
  };

  const getDayOfWeek = (dayName: string) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(dayName.toLowerCase());
  };

  return (
    <>
      <SEOHead
        title="Class Schedule & Timings - Vedic Wisdom Series"
        description="View complete schedule for Weekend Discourses, Chanting Classes, Teacher Training, and special events. Multiple time zones supported. Book your spiritual transformation session."
        keywords={['Vedic class schedule', 'spiritual program timings', 'Dr. Nischaya schedule', 'online meditation times', 'Sanskrit class schedule']}
        image={`${siteConfig.siteUrl}/assets/images/schedule-hero.jpg`}
      />

      <PageWrapper hasHero={true}>
        {/* 🕉️ HERO SECTION */}
        <HeroSectionWrapper>
          <Box
            minH="60vh"
            bgGradient={bgGradient}
            position="relative"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            <Container maxW="7xl" position="relative" zIndex={2}>
              <VStack spacing={8} textAlign="center" ref={heroAnimation.ref} style={heroAnimation.style}>
                <Icon as={FaCalendarAlt} boxSize={16} color="blue.500" />
                
                <VStack spacing={4}>
                  <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} color={headingColor}>
                    Your Sacred Time Awaits
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" color={textColor} lineHeight="tall">
                    Join live sessions with Dr. Nischaya Nagori and experience the transformation 
                    that happens when ancient wisdom meets your modern schedule.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" color="blue.600">
                    "The right teaching at the right time changes everything"
                  </Text>
                </VStack>

                {/* Timezone Selector */}
                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Select
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    maxW="250px"
                    bg={cardBg}
                    borderColor="blue.300"
                    _focus={{ borderColor: "blue.500" }}
                  >
                    {timezones.map(tz => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </Select>
                  <Badge colorScheme="green" fontSize="md" px={3} py={1}>
                    All Times in {selectedTimezone}
                  </Badge>
                </HStack>
              </VStack>
            </Container>
          </Box>
        </HeroSectionWrapper>

        {/* 🕉️ QUICK INFO SECTION */}
        <SectionWrapper bg={cardBg}>
          <Container maxW="6xl">
            <Alert status="info" borderRadius="xl" ref={scheduleAnimation.ref} style={scheduleAnimation.style}>
              <AlertIcon as={FaInfoCircle} />
              <Box>
                <AlertTitle>Live Online Sessions via Zoom</AlertTitle>
                <AlertDescription>
                  All classes are conducted live online. Recordings available for 7 days after each session. 
                  Limited seats ensure personalized attention from Dr. Nischaya.
                </AlertDescription>
              </Box>
            </Alert>
          </Container>
        </SectionWrapper>

        {/* 🕉️ WEEKLY SCHEDULE TABS */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="blue" fontSize="md" px={4} py={2} borderRadius="full">
                Weekly Schedule
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Regular Classes & Sessions
              </Heading>
            </VStack>

            <Container maxW="7xl">
              <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList justifyContent="center" flexWrap="wrap">
                  {Object.keys(weeklySchedule).map((day) => (
                    <Tab key={day} textTransform="capitalize">
                      {day.slice(0, 3)}
                    </Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {Object.entries(weeklySchedule).map(([day, sessions]) => (
                    <TabPanel key={day}>
                      {sessions.length === 0 ? (
                        <Box textAlign="center" py={12}>
                          <Icon as={FaMoon} boxSize={12} color="gray.400" mb={4} />
                          <Text color={mutedText} fontSize="lg">
                            Day of Rest & Integration
                          </Text>
                          <Text color={mutedText} fontSize="sm" mt={2}>
                            Practice what you've learned
                          </Text>
                        </Box>
                      ) : (
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                          {sessions.map((session, index) => (
                            <Card
                              key={index}
                              bg={cardBg}
                              shadow="md"
                              borderRadius="xl"
                              overflow="hidden"
                              _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                              transition="all 0.3s"
                            >
                              <Box bg={`${session.color}.500`} h={2} />
                              <CardBody p={6}>
                                <VStack align="stretch" spacing={4}>
                                  <HStack justify="space-between">
                                    <HStack>
                                      <Icon as={session.icon} boxSize={6} color={`${session.color}.500`} />
                                      <Heading size="md" color={headingColor}>
                                        {session.program}
                                      </Heading>
                                    </HStack>
                                    <Badge colorScheme={session.color} variant="outline">
                                      {session.level}
                                    </Badge>
                                  </HStack>

                                  <HStack spacing={4} flexWrap="wrap">
                                    <HStack>
                                      <Icon as={FaClock} color={mutedText} />
                                      <Text fontWeight="bold">
                                        {convertTime(session.time, selectedTimezone)} {selectedTimezone}
                                      </Text>
                                    </HStack>
                                    <HStack>
                                      <Icon as={FaVideo} color={mutedText} />
                                      <Text fontSize="sm" color={mutedText}>
                                        {session.duration}
                                      </Text>
                                    </HStack>
                                  </HStack>

                                  {'topic' in session && (
                                    <Box bg={useColorModeValue('gray.50', 'gray.700')} p={3} borderRadius="md">
                                      <Text fontSize="sm" color={textColor}>
                                        <strong>Topic:</strong> {session.topic}
                                      </Text>
                                    </Box>
                                  )}

                                  <HStack justify="space-between">
                                    <Text fontSize="sm" color={mutedText}>
                                      {session.instructor}
                                    </Text>
                                    <Tag size="sm" colorScheme="red" variant="subtle">
                                      {session.spots}
                                    </Tag>
                                  </HStack>

                                  <Button
                                    colorScheme={session.color}
                                    size="sm"
                                    onClick={() => handleBooking(session.program, day)}
                                    rightIcon={<Icon as={FaCalendarCheck} />}
                                  >
                                    Book This Session
                                  </Button>
                                </VStack>
                              </CardBody>
                            </Card>
                          ))}
                        </SimpleGrid>
                      )}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ SPECIAL EVENTS SECTION */}
        <SectionWrapper bg={useColorModeValue('purple.50', 'gray.900')}>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                Special Events
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Upcoming Sacred Gatherings
              </Heading>
            </VStack>

            <Container maxW="5xl">
              <VStack spacing={6}>
                {specialEvents.map((event, index) => (
                  <Card
                    key={index}
                    w="full"
                    bg={cardBg}
                    shadow="md"
                    _hover={{ transform: 'translateX(8px)', shadow: 'lg' }}
                    transition="all 0.3s"
                  >
                    <CardBody>
                      <Flex direction={{ base: 'column', md: 'row' }} gap={6} align="center">
                        <Box
                          bg={`${event.color}.100`}
                          p={4}
                          borderRadius="xl"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={event.icon} boxSize={10} color={`${event.color}.500`} />
                        </Box>
                        
                        <VStack align={{ base: 'center', md: 'start' }} flex={1} spacing={2}>
                          <Heading size="md" color={headingColor}>
                            {event.event}
                          </Heading>
                          <Text color={textColor}>
                            {event.description}
                          </Text>
                          <HStack spacing={4} flexWrap="wrap">
                            <Tag colorScheme={event.color}>
                              <TagLeftIcon as={FaCalendarAlt} />
                              <TagLabel>{event.date}</TagLabel>
                            </Tag>
                            <Tag colorScheme="blue">
                              <TagLeftIcon as={FaClock} />
                              <TagLabel>{event.time}</TagLabel>
                            </Tag>
                            <Tag colorScheme="green">
                              <TagLabel>{event.price}</TagLabel>
                            </Tag>
                          </HStack>
                        </VStack>

                        <Button
                          colorScheme={event.color}
                          size="md"
                          rightIcon={<Icon as={FaCheckCircle} />}
                        >
                          Reserve Spot
                        </Button>
                      </Flex>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ BOOKING INFO */}
        <SectionWrapper>
          <Container maxW="4xl" textAlign="center">
            <VStack spacing={8}>
              <Icon as={FaHeart} boxSize={12} color="pink.500" />
              <Heading size="lg" color={headingColor}>
                Ready to Transform Your Life?
              </Heading>
              <Text fontSize="lg" color={textColor} lineHeight="tall">
                Each session is a sacred opportunity for growth. Whether you join us for 
                Weekend Discourses, Chanting Classes, or Teacher Training, you're taking 
                a powerful step toward awakening your highest potential.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
                <VStack>
                  <Icon as={FaUsers} boxSize={8} color="orange.500" />
                  <Text fontWeight="bold">Small Groups</Text>
                  <Text fontSize="sm" color={mutedText}>
                    Limited seats for personalized attention
                  </Text>
                </VStack>
                <VStack>
                  <Icon as={FaVideo} boxSize={8} color="blue.500" />
                  <Text fontWeight="bold">Live + Recorded</Text>
                  <Text fontSize="sm" color={mutedText}>
                    Can't make it? Watch within 7 days
                  </Text>
                </VStack>
                <VStack>
                  <Icon as={FaGlobe} boxSize={8} color="green.500" />
                  <Text fontWeight="bold">Global Community</Text>
                  <Text fontSize="sm" color={mutedText}>
                    Join seekers from 25+ countries
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Container>
        </SectionWrapper>

        {/* Universal CTA */}
        <Box py={8}>
          <UniversalCTA variant="hero" />
        </Box>
      </PageWrapper>
    </>
  );
}