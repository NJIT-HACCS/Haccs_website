import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Linkedin, Mail } from "lucide-react";
import React from "react";

interface EBoardMemberProps {
  name: string;
  role: string;
  major: string;
  year: string;
  imageUrl: string;
  linkedin?: string;
  email?: string;
}

const EBoardMemberChakra: React.FC<EBoardMemberProps> = ({
  name,
  role,
  major,
  year,
  imageUrl,
  linkedin,
  email,
}) => {
  return (
    <VStack
      gap={3}
      p={6}
      bg="haccs.navyLight"
      borderRadius="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(255, 107, 74, 0.15)",
      }}
    >
      <Box
        w="120px"
        h="120px"
        borderRadius="full"
        overflow="hidden"
        border="3px solid"
        borderColor="haccs.coral"
      >
        <Image
          src={imageUrl}
          alt={name}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
      <VStack gap={1}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          fontFamily="heading"
          color="haccs.cream"
        >
          {name}
        </Text>
        <Text
          fontSize="md"
          fontWeight="semibold"
          color="haccs.coral"
        >
          {role}
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          {major}
        </Text>
        <Text fontSize="xs" color="whiteAlpha.500">
          {year}
        </Text>
        
        {(linkedin || email) && (
          <HStack gap={3} mt={2}>
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                color="whiteAlpha.700"
                _hover={{ color: "haccs.coral" }}
                transition="color 0.2s ease"
              >
                <Linkedin size={20} />
              </Link>
            )}
            {email && (
              <Link
                href={`mailto:${email}`}
                color="whiteAlpha.700"
                _hover={{ color: "haccs.coral" }}
                transition="color 0.2s ease"
              >
                <Mail size={20} />
              </Link>
            )}
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default React.memo(EBoardMemberChakra);
