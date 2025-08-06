/**
 * 🕉️ STREAMLINED REGISTRATION SYSTEM
 * Dr. Nagori: "Easy for users to register and developers to track"
 * One-click registration with comprehensive tracking
 */

import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Input,
  Select,
  Button,
  Text,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Icon,
  Badge,
  Divider,
  Link
} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { languageProfiles } from '@/data/languageCustomization';
import { spiritualAPI } from '@/lib/api/spiritualAPI';

interface RegistrationData {
  // Essential fields only
  fullName: string;
  email: string;
  country: string;
  nativeLanguage: string;
  program: string;
  whatsappNumber?: string;
  
  // Interest tracking
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  interests: string[];
  referralSource: string;
  
  // Consent
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

export const StreamlinedRegistration: React.FC = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    country: '',
    nativeLanguage: 'en',
    program: '',
    experienceLevel: 'beginner',
    interests: [],
    referralSource: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  // Social login handlers
  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    // In production, integrate OAuth
    toast({
      title: `${provider} login coming soon`,
      description: "For now, please use email registration",
      status: 'info',
      duration: 3000
    });
  };

  // One-click registration with minimal fields
  const handleQuickRegister = async () => {
    setIsLoading(true);
    
    try {
      // Validate minimum required fields
      if (!registrationData.fullName || !registrationData.email || !registrationData.program) {
        toast({
          title: 'Please fill required fields',
          status: 'error',
          duration: 3000
        });
        return;
      }

      // Register via API
      const response = await spiritualAPI.registerForOffering({
        offeringId: registrationData.program,
        seekerName: registrationData.fullName,
        seekerEmail: registrationData.email,
        seekerCountry: registrationData.country || 'Unknown',
        intention: registrationData.interests.join(', ') || 'Spiritual growth',
        referralSource: registrationData.referralSource
      });

      if (response.success) {
        // Send WhatsApp notification if number provided
        if (registrationData.whatsappNumber) {
          await spiritualAPI.sendWhatsAppNotification(
            registrationData.whatsappNumber,
            `Welcome to Vedic Wisdom Series! Your registration for ${registrationData.program} is confirmed. 🕉️`
          );
        }

        toast({
          title: 'Registration Successful! 🎉',
          description: 'Check your email for next steps',
          status: 'success',
          duration: 5000
        });

        // Track for admin dashboard
        console.log('New Registration:', {
          id: response.data?.registrationId,
          ...registrationData,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: 'Please try again or contact support',
        status: 'error',
        duration: 5000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maxW="500px" mx="auto" p={6}>
      <VStack spacing={6} align="stretch">
        <VStack spacing={2} textAlign="center">
          <Heading size="lg">Begin Your Vedic Journey</Heading>
          <Text color="gray.600">
            "Let's dive into unexplored dimensions of Vedas"
          </Text>
        </VStack>

        {/* Social Login Options */}
        <VStack spacing={3}>
          <Button
            w="full"
            leftIcon={<FaGoogle />}
            onClick={() => handleSocialLogin('google')}
            colorScheme="red"
            variant="outline"
          >
            Continue with Google
          </Button>
          <Button
            w="full"
            leftIcon={<FaFacebook />}
            onClick={() => handleSocialLogin('facebook')}
            colorScheme="facebook"
            variant="outline"
          >
            Continue with Facebook
          </Button>
        </VStack>

        <HStack>
          <Divider />
          <Text fontSize="sm" color="gray.500">OR</Text>
          <Divider />
        </HStack>

        {/* Quick Registration Form */}
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              placeholder="Enter your name"
              value={registrationData.fullName}
              onChange={(e) => setRegistrationData({
                ...registrationData,
                fullName: e.target.value
              })}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="your@email.com"
              value={registrationData.email}
              onChange={(e) => setRegistrationData({
                ...registrationData,
                email: e.target.value
              })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>WhatsApp Number (Optional)</FormLabel>
            <Input
              placeholder="+1234567890"
              value={registrationData.whatsappNumber}
              onChange={(e) => setRegistrationData({
                ...registrationData,
                whatsappNumber: e.target.value
              })}
            />
            <Text fontSize="xs" color="gray.500" mt={1}>
              Get instant updates and join our community
            </Text>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Select Program</FormLabel>
            <RadioGroup
              value={registrationData.program}
              onChange={(value) => setRegistrationData({
                ...registrationData,
                program: value
              })}
            >
              <Stack>
                <Radio value="weekend-discourse">
                  Weekend Discourses ($27)
                </Radio>
                <Radio value="chanting-certification">
                  Chanting Classes ($54)
                </Radio>
                <Radio value="teacher-training">
                  Teacher Training ($108)
                </Radio>
                <Radio value="free-consultation">
                  Free Discovery Call
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Your Native Language</FormLabel>
            <Select
              value={registrationData.nativeLanguage}
              onChange={(e) => setRegistrationData({
                ...registrationData,
                nativeLanguage: e.target.value
              })}
            >
              {Object.entries(languageProfiles).map(([code, profile]) => (
                <option key={code} value={code}>
                  {profile.name}
                </option>
              ))}
            </Select>
            <Text fontSize="xs" color="green.500" mt={1}>
              ✓ You'll receive customized pronunciation guides
            </Text>
          </FormControl>

          <FormControl>
            <FormLabel>Experience Level</FormLabel>
            <RadioGroup
              value={registrationData.experienceLevel}
              onChange={(value: any) => setRegistrationData({
                ...registrationData,
                experienceLevel: value
              })}
            >
              <HStack>
                <Radio value="beginner">Beginner</Radio>
                <Radio value="intermediate">Intermediate</Radio>
                <Radio value="advanced">Advanced</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <Checkbox
              isChecked={registrationData.agreeToTerms}
              onChange={(e) => setRegistrationData({
                ...registrationData,
                agreeToTerms: e.target.checked
              })}
            >
              <Text fontSize="sm">
                I agree to maintain the dignity of Vedic teachings and follow{' '}
                <Link color="blue.500" href="/community-guidelines">
                  community guidelines
                </Link>
              </Text>
            </Checkbox>
          </FormControl>
        </VStack>

        {/* Submit Button */}
        <Button
          size="lg"
          colorScheme="orange"
          isLoading={isLoading}
          onClick={handleQuickRegister}
          isDisabled={!registrationData.agreeToTerms}
          leftIcon={<Icon as={FaWhatsapp} />}
        >
          Complete Registration
        </Button>

        <Text fontSize="xs" color="gray.500" textAlign="center">
          By registering, you'll be flabbergasted by this journey into
          unexplored Vedic dimensions. One-click unsubscribe anytime.
        </Text>
      </VStack>
    </Box>
  );
};