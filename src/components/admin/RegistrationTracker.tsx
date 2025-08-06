/**
 * 🕉️ ADMIN REGISTRATION TRACKER
 * Dr. Nagori: "Easy for developer to track all registrations and leads"
 * Simple, powerful dashboard for managing seekers
 */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  HStack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  Input,
  Select,
  Button,
  Badge,
  Text,
  useColorModeValue,
  Icon,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { FaSearch, FaDownload, FaUsers, FaGlobe, FaGraduationCap, FaChartLine } from 'react-icons/fa';

interface Registration {
  id: string;
  name: string;
  email: string;
  program: string;
  language: string;
  country: string;
  date: string;
  status: 'active' | 'pending' | 'completed';
  source: string;
  whatsapp?: string;
}

export const RegistrationTracker: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('week');
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Simulated data - in production, fetch from API
  useEffect(() => {
    const mockData: Registration[] = [
      {
        id: 'VWS-2025-0001',
        name: 'Sarah Chen',
        email: 'sarah@example.com',
        program: 'Weekend Discourse',
        language: 'English',
        country: 'USA',
        date: '2025-08-06',
        status: 'active',
        source: 'Google',
        whatsapp: '+1234567890'
      },
      // Add more mock data as needed
    ];
    setRegistrations(mockData);
  }, []);

  // Calculate statistics
  const stats = {
    total: registrations.length,
    active: registrations.filter(r => r.status === 'active').length,
    countries: new Set(registrations.map(r => r.country)).size,
    revenue: registrations.reduce((sum, r) => {
      const prices: Record<string, number> = {
        'Weekend Discourse': 27,
        'Chanting Classes': 54,
        'Teacher Training': 108
      };
      return sum + (prices[r.program] || 0);
    }, 0)
  };

  // Filter registrations
  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || reg.program === filter;
    return matchesSearch && matchesFilter;
  });

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Program', 'Language', 'Country', 'Date', 'Status', 'Source', 'WhatsApp'];
    const data = filteredRegistrations.map(r => [
      r.id, r.name, r.email, r.program, r.language, r.country, r.date, r.status, r.source, r.whatsapp || ''
    ]);
    
    const csv = [headers, ...data].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `registrations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <Box p={6}>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Flex align="center">
          <VStack align="start" spacing={1}>
            <Heading size="lg">Registration Dashboard</Heading>
            <Text color="gray.600">Track and manage all Vedic Wisdom Series enrollments</Text>
          </VStack>
          <Spacer />
          <Button
            leftIcon={<FaDownload />}
            colorScheme="green"
            variant="outline"
            onClick={exportToCSV}
          >
            Export CSV
          </Button>
        </Flex>

        {/* Statistics */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          <Stat
            bg={bgColor}
            p={4}
            borderRadius="lg"
            borderWidth={1}
            borderColor={borderColor}
          >
            <StatLabel>Total Registrations</StatLabel>
            <StatNumber>{stats.total}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23% from last week
            </StatHelpText>
          </Stat>

          <Stat
            bg={bgColor}
            p={4}
            borderRadius="lg"
            borderWidth={1}
            borderColor={borderColor}
          >
            <StatLabel>Active Students</StatLabel>
            <StatNumber>{stats.active}</StatNumber>
            <StatHelpText>Currently enrolled</StatHelpText>
          </Stat>

          <Stat
            bg={bgColor}
            p={4}
            borderRadius="lg"
            borderWidth={1}
            borderColor={borderColor}
          >
            <StatLabel>Countries Reached</StatLabel>
            <StatNumber>{stats.countries}</StatNumber>
            <StatHelpText>Global impact</StatHelpText>
          </Stat>

          <Stat
            bg={bgColor}
            p={4}
            borderRadius="lg"
            borderWidth={1}
            borderColor={borderColor}
          >
            <StatLabel>Revenue (Venus Day)</StatLabel>
            <StatNumber>${stats.revenue}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Abundance flowing
            </StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Filters */}
        <HStack spacing={4}>
          <InputGroup maxW="300px">
            <InputLeftElement>
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <Select
            maxW="200px"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Programs</option>
            <option value="Weekend Discourse">Weekend Discourse</option>
            <option value="Chanting Classes">Chanting Classes</option>
            <option value="Teacher Training">Teacher Training</option>
          </Select>

          <Select
            maxW="150px"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="all">All Time</option>
          </Select>
        </HStack>

        {/* Registration Table */}
        <TableContainer
          bg={bgColor}
          borderRadius="lg"
          borderWidth={1}
          borderColor={borderColor}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Program</Th>
                <Th>Language</Th>
                <Th>Country</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredRegistrations.map((reg) => (
                <Tr key={reg.id}>
                  <Td fontSize="sm">{reg.id}</Td>
                  <Td>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">{reg.name}</Text>
                      <Text fontSize="xs" color="gray.500">{reg.email}</Text>
                    </VStack>
                  </Td>
                  <Td>
                    <Badge colorScheme={
                      reg.program === 'Teacher Training' ? 'purple' :
                      reg.program === 'Chanting Classes' ? 'blue' : 'orange'
                    }>
                      {reg.program}
                    </Badge>
                  </Td>
                  <Td>{reg.language}</Td>
                  <Td>{reg.country}</Td>
                  <Td>{new Date(reg.date).toLocaleDateString()}</Td>
                  <Td>
                    <Badge colorScheme={
                      reg.status === 'active' ? 'green' :
                      reg.status === 'completed' ? 'blue' : 'yellow'
                    }>
                      {reg.status}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      {reg.whatsapp && (
                        <Button size="xs" colorScheme="whatsapp" variant="ghost">
                          WhatsApp
                        </Button>
                      )}
                      <Button size="xs" variant="ghost">
                        View
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/* Quick Actions */}
        <HStack spacing={4} justify="center">
          <Button variant="outline" size="sm">
            Send Bulk Email
          </Button>
          <Button variant="outline" size="sm">
            WhatsApp Broadcast
          </Button>
          <Button variant="outline" size="sm">
            Generate Report
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};