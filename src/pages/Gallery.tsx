import { Box, Container, SimpleGrid, Text, Image, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import React from "react";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "HACCS Event 1" },
  { src: gallery2, alt: "HACCS Event 2" },
  { src: gallery3, alt: "HACCS Event 3" },
  { src: gallery4, alt: "HACCS Event 4" },
  { src: gallery5, alt: "HACCS Event 5" },
  { src: gallery6, alt: "HACCS Event 6" },
];

const Gallery: React.FC = () => {
  return (
    <Layout>
      <Container maxW="1400px" px={{ base: 4, md: 8, lg: 16 }} py={20}>
        {/* Header */}
        <VStack align="flex-start" gap={4} mb={16}>
          <Text
            fontFamily="heading"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={900}
            color="haccs.cream"
            textTransform="uppercase"
          >
            HACCS GALLERY
          </Text>
          <Text
            fontFamily="heading"
            fontSize={{ base: "lg", md: "xl" }}
            color="haccs.coral"
          >
            WHAT WE'VE BEEN UP TO
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        {/* Gallery Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {galleryImages.map((image, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              cursor="pointer"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                w="full"
                h="300px"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* Social Links */}
        <HStack justify="center" gap={4} mt={12}>
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
              <Instagram size={18} />
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
              <Mail size={18} />
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
        </HStack>
      </Container>
    </Layout>
  );
};

export default React.memo(Gallery);
