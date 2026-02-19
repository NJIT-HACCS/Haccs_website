import { Box, Container, SimpleGrid, Text, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  isUpcoming?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, isUpcoming }) => (
  <Box
    bg="haccs.navyLight"
    borderRadius="xl"
    p={6}
    border="1px solid"
    borderColor={isUpcoming ? "haccs.coral" : "whiteAlpha.100"}
    transition="transform 0.3s, box-shadow 0.3s"
    _hover={{
      transform: "translateY(-4px)",
      boxShadow: "0 10px 30px rgba(255, 107, 74, 0.1)",
    }}
  >
    {isUpcoming && (
      <Text fontFamily="heading" fontSize="xs" color="haccs.coral" textTransform="uppercase" mb={3}>
        Upcoming
      </Text>
    )}
    <Text fontFamily="heading" fontSize="xl" fontWeight="bold" color="haccs.cream" mb={3}>
      {title}
    </Text>
    <VStack align="flex-start" gap={2}>
      <HStack>
        <Calendar size={14} color="#FF6B4A" />
        <Text fontSize="sm" color="whiteAlpha.700">
          {date}
        </Text>
      </HStack>
      <HStack>
        <Clock size={14} color="#FF6B4A" />
        <Text fontSize="sm" color="whiteAlpha.700">
          {time}
        </Text>
      </HStack>
      <HStack>
        <MapPin size={14} color="#FF6B4A" />
        <Text fontSize="sm" color="whiteAlpha.700">
          {location}
        </Text>
      </HStack>
    </VStack>
  </Box>
);

const pastEvents = [
  {
    title: "Speaker Series: Systems Engineering with Daniel Vargas",
    date: "February 18, 2026",
    time: "2:30 PM - 4:00 PM",
    location: "CKB 126",
  },
  {
    title: "GBM1",
    date: "January 23, 2026",
    time: "11:30 AM - 1:00 PM",
    location: "CC 220",
  },
  {
    title: "Student Involvement Fair",
    date: "January 21, 2026",
    time: "2:30 PM - 4:00 PM",
    location: "CC Ballrooms",
  },
  {
    title: "Pie The E-Board",
    date: "October 24, 2025",
    time: "11:30 AM - 3 PM",
    location: "Lower Greens",
  },
  {
    title: "VS Code Dev Days",
    date: "September 4, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "GITC 3700",
  },
];

const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=njithaccs%40gmail.com&ctz=America%2FNew_York";
const GOOGLE_CALENDAR_PUBLIC_URL = "https://calendar.google.com/calendar/u/0?cid=njithaccs%40gmail.com";

const Events: React.FC = () => {
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
            UPCOMING EVENTS
          </Text>
          <Box w="80px" h="3px" bg="haccs.coral" />
        </VStack>

        {/* Google Calendar Embed */}
        <Box
          bg="haccs.navyLight"
          borderRadius="xl"
          p={{ base: 4, md: 8 }}
          border="1px solid"
          borderColor="haccs.coral"
          mb={16}
        >
          <HStack justify="space-between" align="center" mb={6} flexWrap="wrap" gap={4}>
            <Text fontFamily="heading" fontSize="lg" color="haccs.coral">
              Mark Your Calendar
            </Text>
            <ChakraLink
              href={GOOGLE_CALENDAR_PUBLIC_URL}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              gap={2}
              px={4}
              py={2}
              bg="transparent"
              border="1px solid"
              borderColor="haccs.coral"
              color="haccs.coral"
              fontFamily="heading"
              fontSize="sm"
              borderRadius="md"
              _hover={{ bg: "haccs.coral", color: "white", textDecoration: "none" }}
              transition="all 0.3s"
            >
              Add to Google Calendar
              <ExternalLink size={14} />
            </ChakraLink>
          </HStack>
          <Box borderRadius="lg" overflow="hidden" bg="white" h={{ base: "400px", md: "500px" }}>
            <iframe
              src={GOOGLE_CALENDAR_EMBED_URL}
              style={{ border: 0, width: "100%", height: "100%" }}
              title="HACCS Events Calendar"
            />
          </Box>
        </Box>

        {/* Past Events */}
        <VStack align="flex-start" gap={4} mb={8}>
          <Text fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={700} color="haccs.cream">
            Past Events
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default React.memo(Events);
