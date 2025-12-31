import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import flyer1 from "../resources/images/haccsLogo.png";
import flyer2 from "../resources/images/haccsLogo.png";
import flyer3 from "../resources/images/haccsLogo.png";

const AboutUs = () => {
  return (
    <>
      {/* Load Odibee Sans ONLY when this page renders (no global files touched) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
        `}
      </style>

      <Box
        as="main"
        // background keeps going as you scroll
        minH="100%"
        bg="linear-gradient(180deg, #060616 0%, #07061B 35%, #050513 70%, #04030F 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* subtle overlay so it doesn't feel like the gradient "stops" */}
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(circle at 30% 80%, rgba(255,170,120,0.10), transparent 55%),
              radial-gradient(circle at 70% 20%, rgba(110,90,255,0.10), transparent 55%)"
          pointerEvents="none"
        />

        {/* soft corner glow (bottom-left) */}
        <Box
          position="absolute"
          left="-200px"
          bottom="-200px"
          w="560px"
          h="560px"
          borderRadius="full"
          bg="radial-gradient(circle at 40% 40%, rgba(255,170,120,0.34), rgba(255,170,120,0.0) 70%)"
          filter="blur(12px)"
          pointerEvents="none"
        />

        {/* subtle top glow */}
        <Box
          position="absolute"
          top="-280px"
          left="18%"
          w="680px"
          h="680px"
          borderRadius="full"
          bg="radial-gradient(circle at 50% 50%, rgba(110,90,255,0.14), rgba(110,90,255,0.0) 70%)"
          filter="blur(14px)"
          pointerEvents="none"
        />

        <Container
          maxW="7xl"
          pt={{ base: 10, md: 16 }}
          pb={{ base: 18, md: 30 }}
          position="relative"
          zIndex={1}
        >
          <Flex
            gap={{ base: 10, md: 14 }}
            direction={{ base: "column", md: "row" }}
            align="stretch"
          >
            {/* LEFT: About text */}
            <Box flex="1" pt={{ base: 6, md: 16 }} position="relative">
              <Heading
                as="h1"
                color="white"
                // Odibee Sans like Figma
                fontFamily="'Odibee Sans', system-ui, sans-serif"
                fontWeight="400"
                textTransform="uppercase"
                letterSpacing="0.14em"
                fontSize={{ base: "5xl", md: "7xl" }}
                lineHeight="0.85"
              >
                ABOUT&nbsp;US
              </Heading>

              <Box mt={{ base: 7, md: 10 }} maxW={{ base: "100%", md: "580px" }}>
                <Text
                  color="white"
                  fontWeight="400"
                  // bigger body text
                  fontSize={{ base: "xl", md: "3xl" }}
                  lineHeight={{ base: "1.8", md: "1.9" }}
                >
                  Established in 2023, HACCS became NJIT’s second professional
                  organization for Hispanic &amp; Latina students.
                </Text>

                <Text
                  mt={6}
                  color="whiteAlpha.850"
                  // bigger paragraph + more breathable
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight={{ base: "2.0", md: "2.1" }}
                >
                  We serve to enhance the college experience and professional
                  development of Hispanic &amp; Latina students in the Ying Wu
                  College of Computing by providing workshops, inviting seasoned
                  professionals, and fostering a supportive community.
                </Text>
              </Box>
            </Box>

            {/* Vertical divider (only on desktop) */}
            <Box
              display={{ base: "none", md: "block" }}
              w="1px"
              bg="whiteAlpha.300"
              mt={12}
              mb={10}
            />

            {/* RIGHT: Flyer collage */}
            <Box flex="1.2" position="relative" pt={{ base: 2, md: 8 }}>
              {/* long horizontal line across top */}
              <Box
                position="absolute"
                top={{ base: 0, md: 14 }}
                left={{ base: 0, md: 28 }}
                right={0}
                h="1px"
                bg="whiteAlpha.300"
              />

              {/* Collage: absolute positioning on desktop for Figma-like placement */}
              <Box mt={{ base: 8, md: 20 }}>
                <Box display="flex" justifyContent="center">
                    <Button
                        mb = {{base: 8, md: 10}}
                        w={{ base: "100%", sm: "260px" }}
                        color="black"
                        bg="white.600"
                        _hover={{ bg: "white.700" }}
                        _active={{ bg: "white.800" }}
                        borderRadius="md"
                    >
                        UPCOMING EVENTS
                    </Button>
                </Box>
                {}
                <Box
                    display="grid"
                    gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
                    gap={{ base: 6, md: 8 }}
                >
                <FlyerCard src={flyer1} alt="Event flyer 1" />
                <FlyerCard src={flyer2} alt="Event flyer 2" />
                <FlyerCard src={flyer3} alt="Event flyer 3" />
                <Box display={{ base: "none", sm: "block" }} />
             </Box>


            </Box>

            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

function FlyerCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 12px 34px rgba(0,0,0,0.42)"
      _hover={{ transform: "translateY(-2px)" }}
      transition="transform 0.15s ease"
    >
      <Image src={src} alt={alt} w="100%" h="auto" display="block" />
    </Box>
  );
}

export default React.memo(AboutUs);
