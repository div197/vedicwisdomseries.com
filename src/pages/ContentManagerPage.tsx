import React, { useState, useRef } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useToast,
  useColorModeValue,
  Icon,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import {
  FiUpload,
  FiBook,
  FiSave,
  FiEye,
  FiDownload,
  FiBarChart,
  FiFileText,
  FiGlobe,
  FiHeart
} from 'react-icons/fi'
import { siteConfig } from '../siteConfig'

interface BookMetadata {
  title: string
  author: string
  category: string
  language: string
  description: string
  tags: string[]
  yearWritten?: string
  translator?: string
  publisher?: string
}

interface UploadedBook {
  id: string
  file: File
  metadata: BookMetadata
  status: 'uploaded' | 'processing' | 'published'
  uploadDate: Date
}

const ContentManagerPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [metadata, setMetadata] = useState<BookMetadata>({
    title: '',
    author: '',
    category: '',
    language: 'Sanskrit',
    description: '',
    tags: [],
    yearWritten: '',
    translator: '',
    publisher: ''
  })
  const [uploadedBooks, setUploadedBooks] = useState<UploadedBook[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const toast = useToast()

  const bgColor = useColorModeValue('kd.canvas', 'kd.surface')
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceElevated')
  const borderColor = useColorModeValue('kd.border', 'kd.borderHover')

  const categories = [
    'Vedas',
    'Upanishads', 
    'Puranas',
    'Itihasas',
    'Dharma Shastras',
    'Darshan Shastras',
    'Stotras & Hymns',
    'Commentaries',
    'Modern Dharmic Literature',
    'Spiritual Biographies'
  ]

  const languages = [
    'Sanskrit',
    'Hindi',
    'English',
    'Bengali',
    'Tamil',
    'Telugu',
    'Gujarati',
    'Marathi',
    'Other'
  ]

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.type === 'application/pdf') {
        setSelectedFile(file)
        toast({
          title: 'File Selected',
          description: `${file.name} ready for upload`,
          status: 'info',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please select a PDF file',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }
  }

  const handleMetadataChange = (field: keyof BookMetadata, value: string | string[]) => {
    setMetadata(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    handleMetadataChange('tags', tags)
  }

  const validateForm = (): boolean => {
    if (!selectedFile) {
      toast({
        title: 'No File Selected',
        description: 'Please select a PDF file to upload',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return false
    }

    if (!metadata.title || !metadata.author || !metadata.category) {
      toast({
        title: 'Missing Required Fields',
        description: 'Please fill in title, author, and category',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return false
    }

    return true
  }

  const handleUpload = async () => {
    if (!validateForm()) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const progressInterval = window.setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          window.clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      const newBook: UploadedBook = {
        id: Date.now().toString(),
        file: selectedFile!,
        metadata: { ...metadata },
        status: 'uploaded',
        uploadDate: new Date()
      }

      setUploadedBooks(prev => [newBook, ...prev])
      
      // Reset form
      setSelectedFile(null)
      setMetadata({
        title: '',
        author: '',
        category: '',
        language: 'Sanskrit',
        description: '',
        tags: [],
        yearWritten: '',
        translator: '',
        publisher: ''
      })
      
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }

      toast({
        title: 'Upload Successful',
        description: 'Sacred text has been uploaded and is ready for review',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

    } catch (error) {
      toast({
        title: 'Upload Failed',
        description: 'Please try again or contact technical support',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handlePublish = (bookId: string) => {
    setUploadedBooks(prev => 
      prev.map(book => 
        book.id === bookId 
          ? { ...book, status: 'published' }
          : book
      )
    )
    
    toast({
      title: 'Book Published',
      description: 'Sacred text is now available in the public library',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uploaded': return 'primary'
      case 'processing': return 'tertiary'
      case 'published': return 'secondary'
      default: return 'primary'
    }
  }

  const stats = {
    totalBooks: uploadedBooks.length,
    publishedBooks: uploadedBooks.filter(book => book.status === 'published').length,
    pendingBooks: uploadedBooks.filter(book => book.status === 'uploaded').length,
    categories: [...new Set(uploadedBooks.map(book => book.metadata.category))].length
  }

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading 
              size="xl" 
              color={siteConfig.theme.colors.primary}
              mb={2}
            >
              🕉️ Sacred Text Content Manager
            </Heading>
            <Text fontSize="lg" color="kd.textSecondary">
              Digital Preservation Workflow for Dharmic Literature
            </Text>
            <Text fontSize="sm" color="kd.textMuted" mt={2}>
              Serving the authentic Guru-Shishya Parampara tradition of Dharmasamrat Swami Karpatri Ji Maharaj
            </Text>
          </Box>

          {/* Statistics Dashboard */}
          <Card bg={cardBg} borderColor={borderColor}>
            <CardHeader>
              <HStack>
                <Icon as={FiBarChart} color={siteConfig.theme.colors.primary} />
                <Heading size="md">Content Statistics</Heading>
              </HStack>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                <Stat>
                  <StatLabel>Total Books</StatLabel>
                  <StatNumber color="kd.primary">
                    {stats.totalBooks}
                  </StatNumber>
                  <StatHelpText>Sacred texts preserved</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Published</StatLabel>
                  <StatNumber color="kd.success">
                    {stats.publishedBooks}
                  </StatNumber>
                  <StatHelpText>Available to seekers</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Pending Review</StatLabel>
                  <StatNumber color="kd.primary">
                    {stats.pendingBooks}
                  </StatNumber>
                  <StatHelpText>Awaiting publication</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Categories</StatLabel>
                  <StatNumber color="kd.tertiary">
                    {stats.categories}
                  </StatNumber>
                  <StatHelpText>Knowledge domains</StatHelpText>
                </Stat>
              </SimpleGrid>
            </CardBody>
          </Card>

          {/* Upload Section */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
            {/* File Upload */}
            <Card bg={cardBg} borderColor={borderColor}>
              <CardHeader>
                <HStack>
                  <Icon as={FiUpload} color={siteConfig.theme.colors.primary} />
                  <Heading size="md">Upload Sacred Text</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel>Select PDF File</FormLabel>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileSelect}
                      p={1}
                    />
                    {selectedFile && (
                      <Text fontSize="sm" color="kd.textSecondary" mt={2}>
                        ✓ {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </Text>
                    )}
                  </FormControl>

                  {isUploading && (
                    <Box>
                      <Text fontSize="sm" mb={2}>Uploading... {uploadProgress}%</Text>
                      <Progress value={uploadProgress} colorScheme="primary" />
                    </Box>
                  )}
                </VStack>
              </CardBody>
            </Card>

            {/* Metadata Form */}
            <Card bg={cardBg} borderColor={borderColor}>
              <CardHeader>
                <HStack>
                  <Icon as={FiBook} color={siteConfig.theme.colors.primary} />
                  <Heading size="md">Book Metadata</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input
                      value={metadata.title}
                      onChange={(e) => handleMetadataChange('title', e.target.value)}
                      placeholder="Enter book title"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Author/Sage</FormLabel>
                    <Input
                      value={metadata.author}
                      onChange={(e) => handleMetadataChange('author', e.target.value)}
                      placeholder="Enter author or sage name"
                    />
                  </FormControl>

                  <HStack>
                    <FormControl isRequired>
                      <FormLabel>Category</FormLabel>
                      <Select
                        value={metadata.category}
                        onChange={(e) => handleMetadataChange('category', e.target.value)}
                        placeholder="Select category"
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Language</FormLabel>
                      <Select
                        value={metadata.language}
                        onChange={(e) => handleMetadataChange('language', e.target.value)}
                      >
                        {languages.map(language => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </HStack>

                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      value={metadata.description}
                      onChange={(e) => handleMetadataChange('description', e.target.value)}
                      placeholder="Brief description of the text's significance"
                      rows={3}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Tags (comma-separated)</FormLabel>
                    <Input
                      value={metadata.tags.join(', ')}
                      onChange={(e) => handleTagsChange(e.target.value)}
                      placeholder="vedanta, philosophy, spirituality"
                    />
                  </FormControl>

                  <Button
                    colorScheme="secondary"
                    size="lg"
                    leftIcon={<FiSave />}
                    onClick={handleUpload}
                    isLoading={isUploading}
                    loadingText="Uploading..."
                    isDisabled={!selectedFile}
                  >
                    Upload Sacred Text
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </Grid>

          {/* Uploaded Books List */}
          {uploadedBooks.length > 0 && (
            <Card bg={cardBg} borderColor={borderColor}>
              <CardHeader>
                <HStack>
                  <Icon as={FiFileText} color={siteConfig.theme.colors.primary} />
                  <Heading size="md">Uploaded Sacred Texts</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {uploadedBooks.map((book) => (
                    <Box
                      key={book.id}
                      p={4}
                      border="1px"
                      borderColor={borderColor}
                      borderRadius="md"
                    >
                      <Flex justify="space-between" align="start" mb={2}>
                        <VStack align="start" spacing={1} flex={1}>
                          <HStack>
                            <Heading size="sm">{book.metadata.title}</Heading>
                            <Badge colorScheme={getStatusColor(book.status)}>
                              {book.status}
                            </Badge>
                          </HStack>
                          <Text fontSize="sm" color="kd.textSecondary">
                            by {book.metadata.author} • {book.metadata.category} • {book.metadata.language}
                          </Text>
                          <Text fontSize="xs" color="kd.textMuted">
                            Uploaded: {book.uploadDate.toLocaleDateString()}
                          </Text>
                        </VStack>
                        <HStack>
                          <Button size="sm" leftIcon={<FiEye />} variant="outline">
                            Preview
                          </Button>
                          {book.status === 'uploaded' && (
                            <Button
                              size="sm"
                              colorScheme="secondary"
                              leftIcon={<FiGlobe />}
                              onClick={() => handlePublish(book.id)}
                            >
                              Publish
                            </Button>
                          )}
                          {book.status === 'published' && (
                            <Button size="sm" leftIcon={<FiDownload />} variant="outline">
                              Download
                            </Button>
                          )}
                        </HStack>
                      </Flex>
                      {book.metadata.description && (
                        <Text fontSize="sm" color="kd.textSecondary" mt={2}>
                          {book.metadata.description}
                        </Text>
                      )}
                      {book.metadata.tags.length > 0 && (
                        <HStack mt={2} flexWrap="wrap">
                          {book.metadata.tags.map((tag, index) => (
                            <Badge key={index} variant="subtle" colorScheme="primary">
                              {tag}
                            </Badge>
                          ))}
                        </HStack>
                      )}
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          )}

          {/* Mission Statement */}
          <Alert status="info" borderRadius="md">
            <AlertIcon as={FiHeart} />
            <Box>
              <AlertTitle>Sacred Mission</AlertTitle>
              <AlertDescription>
                Through this digital preservation workflow, we serve the timeless vision of 
                Dharmasamrat Swami Karpatri Ji Maharaj: "ज्ञान सर्वजन हिताय" - Knowledge for the welfare of all. 
                Every text uploaded here becomes part of humanity's spiritual heritage, 
                freely accessible to seekers worldwide.
              </AlertDescription>
            </Box>
          </Alert>
        </VStack>
      </Container>
    </Box>
  )
}

export default ContentManagerPage 