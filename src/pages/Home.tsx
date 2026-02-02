import { Box, Container, Flex, VStack, HStack, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box minH="100vh" display="flex" alignItems="center" position="relative">
        {/* Gradient overlay */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          w="600px"
          h="600px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(255,107,74,0.3) 0%, rgba(255,107,74,0) 70%)"
          filter="blur(60px)"
          pointerEvents="none"
        />

        <Container maxW="1400px" px={{ base: 4, md: 8, lg: 16 }}>
          <Flex direction="column" gap={8}>
            {/* Pre-title */}
            <Text fontFamily="body" fontSize={{ base: "md", md: "lg" }} color="haccs.cream" fontStyle="italic">
              New Jersey Institute of Technology
            </Text>

            {/* Main Title */}
            <VStack align="flex-start" gap={0}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
                fontWeight={900}
                color="haccs.cream"
                lineHeight={1.1}
                textTransform="uppercase"
              >
                HISPANIC & LATINE ASSOCIATION OF
              </Text>
              <Text
                fontFamily="heading"
                fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
                fontWeight={900}
                color="haccs.cream"
                lineHeight={1.1}
                textTransform="uppercase"
              >
                COMPUTING COLLEGE STUDENTS
              </Text>
            </VStack>

            {/* Divider */}
            <Box w="120px" h="3px" bg="haccs.coral" />

            {/* CTA Button */}
            <Link to="/about">
              <Button
                variant="outline"
                borderColor="haccs.coral"
                color="haccs.cream"
                fontFamily="heading"
                fontWeight={600}
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ bg: "haccs.coral", color: "white" }}
                transition="all 0.3s"
              >
                LEARN MORE{" "}
                <Text as="span" ml={2}>
                  →
                </Text>
              </Button>
            </Link>

            {/* Social Links */}
            <VStack align="flex-start" gap={3} mt={8}>
              <ChakraLink href="https://discord.gg/Se5wAXzKDE" target="_blank">
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Box>
              </ChakraLink>
              <ChakraLink href="https://www.instagram.com/njit_haccs/" target="_blank">
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <Instagram size={18} />
                </Box>
              </ChakraLink>
              <ChakraLink href="https://linkedin.com" target="_blank">
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <Linkedin size={18} />
                </Box>
              </ChakraLink>
              <Box w="1px" h="60px" bg="haccs.coral" mx="auto" />
            </VStack>
          </Flex>

          {/* Mission Statement */}
          <Box position="absolute" bottom="10%" right="10%" maxW="500px" display={{ base: "none", lg: "block" }}>
            <HStack align="flex-start" gap={4}>
              <Box w="3px" h="120px" bg="haccs.coral" flexShrink={0} />
              <Text fontFamily="body" fontSize="md" color="whiteAlpha.800" lineHeight={1.8}>
                We are committed to cultivating a strong community, encouraging cultural awareness, and providing
                resources to empower members as they pursue successful careers in computing. Through collaboration and
                engagement, we aim to contribute to a more inclusive and diverse computing field.
              </Text>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default React.memo(Home);
