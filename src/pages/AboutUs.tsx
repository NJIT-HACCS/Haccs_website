import { Box, Container, SimpleGrid, Text, Image, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout/Layout";
import EBoardMemberChakra from "@/components/EBoardMemberChakra";

// Import member images
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";
import memberAlejandro from "@/assets/member-alejandro.jpg";
import memberAngelo from "@/assets/member-angelo.jpg";
import memberTreasurer from "@/assets/member-treasurer.jpg";

// Import event images
import event1 from "@/assets/club-event-1.jpg";
import event2 from "@/assets/club-event-2.jpg";
import event3 from "@/assets/club-event-3.jpg";
import event4 from "@/assets/club-event-4.jpg";

const eboardMembers = [
  {
    name: "Daniel Montoya",
    role: "President",
    major: "Computer Science",
    year: "Senior",
    imageUrl: member1,
    linkedin: "https://www.linkedin.com/in/daniel-eduardo-montoya/",
  },
  {
    name: "Emerson Perez",
    role: "External Vice President",
    major: "Computer Science",
    year: "Junior",
    imageUrl: member2,
    linkedin: "https://www.linkedin.com/in/eoperez/",
  },
  {
    name: "Andrea Pardo",
    role: "Internal Vice President",
    major: "Data Science",
    year: "Senior",
    imageUrl: member3,
    linkedin: "https://www.linkedin.com/in/andreacpardo/",
  },
  {
    name: "Emily Morales",
    role: "Secretary",
    major: "Information Technology",
    year: "Senior",
    imageUrl: member4,
    linkedin: "https://www.linkedin.com/in/emily-morales-medina/",
  },
  {
    name: "Angel Cazares",
    role: "Treasurer",
    major: "Computer Science",
    year: "Senior",
    imageUrl: memberTreasurer,
    linkedin: "https://www.linkedin.com/in/angel-cazares-ajc253/",
  },
  {
    name: "Marcel Velazquez",
    role: "Public Relations",
    major: "Computer Science",
    year: "Junior",
    imageUrl: member5,
    linkedin: "https://www.linkedin.com/in/msv42/",
  },
  {
    name: "Jose Valle",
    role: "Tech Lead",
    major: "Computer Science",
    year: "Junior",
    imageUrl: member6,
    linkedin: "https://www.linkedin.com/in/j-valle1017/",
  },
  {
    name: "Alejandro Perdomo",
    role: "Webmaster",
    major: "Computer Science",
    year: "Sophomore",
    imageUrl: memberAlejandro,
    linkedin: "https://www.linkedin.com/in/apr091107/",
  },
  {
    name: "Angelo Bustamante",
    role: "Webmaster",
    major: "Web and Information systems",
    year: "Junior",
    imageUrl: memberAngelo,
    linkedin: "https://www.linkedin.com/in/angelobustamante/",
  },
];

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <Container maxW="1400px" px={{ base: 4, md: 8, lg: 16 }} py={20}>
        {/* Page Title */}
        <VStack align="center" gap={4} mb={10}>
          <Text
            fontFamily="heading"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={900}
            color="haccs.cream"
            textTransform="uppercase"
          >
            ABOUT US
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        {/* Content Section - Text + Images side by side */}
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 16 }} align="flex-start" mb={12}>
          {/* Left - About Content */}
          <VStack align="flex-start" gap={5} flex={{ base: 1, lg: 0.7 }} minW={0}>
            <Text fontSize="md" color="whiteAlpha.800" lineHeight={1.9}>
              HACCS is the Hispanic & Latine Association of Computing College Students at the New Jersey Institute of
              Technology. We are committed to cultivating a strong community, encouraging cultural awareness, and
              providing resources to empower members as they pursue successful careers in computing.
            </Text>
            <Text fontSize="md" color="whiteAlpha.700" lineHeight={1.9}>
              Through collaboration and engagement, we aim to contribute to a more inclusive and diverse computing
              field. Our events include technical workshops, networking sessions, cultural celebrations, and career
              development opportunities.
            </Text>
          </VStack>

          {/* Right - Event Images 2x2 Grid */}
          <Box flex={{ base: 1, lg: 1.3 }} minW={0}>
            <SimpleGrid columns={2} gap={4}>
              <Image
                src={event1}
                alt="HACCS Event"
                borderRadius="lg"
                objectFit="cover"
                h={{ base: "140px", md: "180px", lg: "200px" }}
                w="100%"
              />
              <Image
                src={event2}
                alt="HACCS Event"
                borderRadius="lg"
                objectFit="cover"
                objectPosition="center 40%"
                h={{ base: "140px", md: "180px", lg: "200px" }}
                w="100%"
              />
              <Image
                src={event3}
                alt="HACCS Event"
                borderRadius="lg"
                objectFit="cover"
                objectPosition="center top"
                h={{ base: "140px", md: "180px", lg: "200px" }}
                w="100%"
              />
              <Image
                src={event4}
                alt="HACCS Event"
                borderRadius="lg"
                objectFit="cover"
                h={{ base: "140px", md: "180px", lg: "200px" }}
                w="100%"
              />
            </SimpleGrid>
          </Box>
        </Flex>


        {/* E-Board Section */}
        <VStack align="center" gap={4} mb={8}>
          <Text
            fontFamily="heading"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={900}
            color="haccs.cream"
            textTransform="uppercase"
          >
            MEET THE E-BOARD
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
          {eboardMembers.map((member, index) => (
            <EBoardMemberChakra key={index} {...member} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default React.memo(AboutUs);
