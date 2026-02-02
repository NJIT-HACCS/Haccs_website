import { Box, Container, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Sponsors: React.FC = () => {
  return (
    <Layout>
      <Container maxW="1400px" px={{ base: 4, md: 8, lg: 16 }} py={20}>
        {/* Header */}
        <VStack align="center" gap={4} mb={16} textAlign="center">
          <Text
            fontFamily="heading"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={900}
            color="haccs.cream"
            textTransform="uppercase"
          >
            OUR SPONSORS
          </Text>
          <Text fontFamily="body" fontSize="lg" color="whiteAlpha.700" maxW="600px">
            We are grateful for the support of our amazing sponsors who help make HACCS possible.
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        {/* Coming Soon Message */}
        <VStack align="center" py={20} gap={8}>
          <Text
            fontFamily="heading"
            fontSize={{ base: "xl", md: "2xl" }}
            color="whiteAlpha.600"
            textAlign="center"
          >
            Sponsor information coming soon...
          </Text>
        </VStack>

        {/* Become a Sponsor CTA */}
        <Box
          bg="haccs.navyLight"
          borderRadius="xl"
          p={12}
          textAlign="center"
          border="1px solid"
          borderColor="haccs.coral"
        >
          <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" color="haccs.cream" mb={4}>
            Become a Sponsor
          </Text>
          <Text fontSize="md" color="whiteAlpha.700" mb={8} maxW="600px" mx="auto">
            Partner with HACCS to support Hispanic students in computing. Your sponsorship helps fund events, workshops, and career development opportunities.
          </Text>
          <Link to="/contact">
            <Button
              bg="haccs.coral"
              color="white"
              fontFamily="heading"
              fontWeight={600}
              px={10}
              py={6}
              fontSize="lg"
              _hover={{ bg: "haccs.coralLight" }}
              transition="all 0.3s"
            >
              GET IN TOUCH
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default React.memo(Sponsors);
