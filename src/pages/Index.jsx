import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <Box bg={bg} color={color}>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" color="white">Home</Link>
              <Link as={RouterLink} to="/about" color="white">About</Link>
              <Link as={RouterLink} to="/contact" color="white">Contact</Link>
              <Button as={RouterLink} to="/add-post" colorScheme="teal" size="sm">Add Post</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a place where I share my thoughts, ideas, and experiences. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="start">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
                  <Heading as="h4" size="md">{post.title}</Heading>
                  <Text mt={2}>{post.content}</Text>
                  {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                  <Button colorScheme="red" size="sm" mt={4} onClick={() => handleDelete(index)}>Delete</Button>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
              <Link href="https://github.com" isExternal><FaGithub /></Link>
              <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;