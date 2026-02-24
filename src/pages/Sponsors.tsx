import { Box, Container, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout/Layout";
import audibleLogo from "@/assets/Audible-logo.png";
import prudentialLogo from "@/assets/prudential-logo.png";

const Sponsors: React.FC = () => {
  const sponsorCardStyles = {
    w: { base: "100%", md: "700px" },
    mx: "auto",
    p: { base: 2, md: 3 },
    borderRadius: "20px",
    bg: "rgba(5, 17, 64, 0.95)",
    boxShadow: "0 0 16px rgba(126, 156, 228, 0.32)",
  };

  const sponsorInnerStyles = {
    h: { base: "125px", md: "150px" },
    borderRadius: "14px",
    bg: "#F3F4F6",
    border: "4px solid",
    borderColor: "#B6C0D2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { base: 5, md: 8 },
  };

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
          <Text fontFamily="body" fontSize="lg" color="whiteAlpha.700" maxW="700px">
            We are grateful for the support of our amazing sponsors who help make HACCS possible.
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        {/* Sponsor Tiers */}
        <VStack gap={12} mb={20}>
          <VStack gap={3} textAlign="center">
            <Text
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight={900}
              color="haccs.cream"
              textTransform="uppercase"
              letterSpacing="0.04em"
            >
              Pioneer Tier
            </Text>
          </VStack>

          <Box {...sponsorCardStyles}>
            <Box {...sponsorInnerStyles}>
              <Box
                as="img"
                src={audibleLogo}
                alt="Audible logo"
                width={{ base: "180px", md: "295px" }}
                maxW="100%"
                height="auto"
                objectFit="contain"
              />
            </Box>
          </Box>

          <VStack gap={3} textAlign="center" pt={2}>
            <Text
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight={900}
              color="haccs.cream"
              textTransform="uppercase"
              letterSpacing="0.04em"
            >
              Visionary Tier
            </Text>
          </VStack>

          <Box {...sponsorCardStyles}>
            <Box {...sponsorInnerStyles}>
              <Box
                as="img"
                src={prudentialLogo}
                alt="Prudential logo"
                width={{ base: "220px", md: "360px" }}
                maxW="100%"
                height="auto"
                objectFit="contain"
              />
            </Box>
          </Box>
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
           
        </Box>


        {/* Become a Sponsor CTA */}
        <Box
          bg="haccs.navyLight"
          borderRadius="xl"
          p={12}
          textAlign="center"
          border="1px solid"
          borderColor="haccs.coral"
          mt={12}
        >
          <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" color="haccs.cream" mb={4}>
            Want to Connect?
          </Text>
          <Text fontSize="md" color="whiteAlpha.700" mb={8} maxW="600px" mx="auto">
            Upload your resume to gain exposure to companies that partner with HACCS!
          </Text>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdk2Cq3D8j-cwe1mfVLTbsMSagSmtSozG2wfVH9XQ2PIuBYPA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            bg="haccs.coral"
            color="white"
            fontFamily="heading"
            fontWeight={600}
            fontSize={{ base: "md", md: "lg" }}
            px={10}
            py={7}
            _hover={{ bg: "haccs.coral", opacity: 0.9 }}
          >
            Upload Resume
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default React.memo(Sponsors);
