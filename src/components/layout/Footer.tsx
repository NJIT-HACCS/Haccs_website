import { Box, Container, Flex, HStack, VStack, Text, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import haccsLogo from "@/assets/haccs-logo.png";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="haccs.navy" borderTop="1px solid" borderColor="whiteAlpha.100" py={12}>
      <Container maxW="1400px" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
        >
          {/* Logo & Description */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={4} maxW="400px">
            <Image
              src={haccsLogo}
              alt="HACCS Logo"
              w="60px"
              h="60px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text fontSize="sm" color="whiteAlpha.700" textAlign={{ base: "center", md: "left" }}>
              Hispanic & Latine Association of Computing College Students at NJIT
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontFamily="heading" fontWeight="bold" color="haccs.cream" mb={2}>
              Quick Links
            </Text>
            <Link to="/about">
              <Text fontSize="sm" color="whiteAlpha.700" _hover={{ color: "haccs.coral" }}>
                About Us
              </Text>
            </Link>
            <Link to="/events">
              <Text fontSize="sm" color="whiteAlpha.700" _hover={{ color: "haccs.coral" }}>
                Events
              </Text>
            </Link>
            <Link to="/gallery">
              <Text fontSize="sm" color="whiteAlpha.700" _hover={{ color: "haccs.coral" }}>
                Gallery
              </Text>
            </Link>
            <Link to="/contact">
              <Text fontSize="sm" color="whiteAlpha.700" _hover={{ color: "haccs.coral" }}>
                Contact
              </Text>
            </Link>
          </VStack>

          {/* Social Links */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontFamily="heading" fontWeight="bold" color="haccs.cream" mb={2}>
              Connect With Us
            </Text>
            <HStack gap={4}>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
                  <Instagram size={20} />
                </Box>
              </ChakraLink>
              <ChakraLink href="mailto:njithaccs@gmail.com" target="_blank">
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
                  <Mail size={20} />
                </Box>
              </ChakraLink>
              <ChakraLink href="https://www.linkedin.com/in/njit-haccs/" target="_blank">
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
                  <Linkedin size={20} />
                </Box>
              </ChakraLink>
            </HStack>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box mt={12} pt={6} borderTop="1px solid" borderColor="whiteAlpha.100" textAlign="center">
          <Text fontSize="sm" color="whiteAlpha.500">
            © {new Date().getFullYear()} HACCS - Hispanic & Latine Association of Computing College Students. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(Footer);
