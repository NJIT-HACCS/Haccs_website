import { Box, Container, SimpleGrid, Text, Image, VStack, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout/Layout";
import tecnoNuevo from "@/assets/gallery/tecno-nuevo-extended.png";
import njitEvent from "@/assets/gallery/njit-event.png";
import njitTeam from "@/assets/gallery/njit-team.png";
import achievement1 from "@/assets/achievements/achievement-1.jpg";

const achievementImages = [tecnoNuevo, njitTeam, njitEvent, achievement1];

const Achievements: React.FC = () => {
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
            HACCS ACHIEVEMENTS
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
          <Text fontSize="lg" color="whiteAlpha.800" lineHeight={1.8} maxW="900px" mt={4}>
            In its first year, HACCS has been able to accrue almost 100+ members, which can be contributed to NJIT recently becoming a Hispanic Serving Institution. We have hosted panels including professionals from Prudential, Lockheed Martin, Apple & the U.S. Department of Defense. We have provided resources to our members through CAHSI (Computing Alliance of Hispanic Serving Institutions).
          </Text>
        </VStack>


        {/* Achievement Images */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {achievementImages.map((image, index) => (
            <Box
              key={index}
              borderRadius="xl"
              overflow="hidden"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(255, 107, 74, 0.15)",
              }}
            >
              <Image src={image} alt={`Achievement ${index + 1}`} w="full" h="300px" objectFit="cover" />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default React.memo(Achievements);
