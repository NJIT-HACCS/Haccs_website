import { Box, Flex, HStack, Text, Button, IconButton, Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import haccsLogo from "@/assets/haccs-logo.png";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ACHIEVEMENTS", path: "/achievements" },
  { name: "EVENTS", path: "/events" },
  { name: "SPONSORS", path: "/sponsors" },
  { name: "CONTACT US", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      py={4}
      px={{ base: 4, md: 8, lg: 16 }}
      bg="rgba(10, 22, 40, 0.9)"
      backdropFilter="blur(10px)"
    >
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        {/* Logo */}
        <Link to="/">
          <Image
            src={haccsLogo}
            alt="HACCS Logo"
            w="50px"
            h="50px"
            borderRadius="full"
            objectFit="cover"
          />
        </Link>

        {/* Desktop Nav */}
        <HStack gap={6} display={{ base: "none", lg: "flex" }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Text
                fontFamily="heading"
                fontSize="sm"
                fontWeight={600}
                color={location.pathname === link.path ? "haccs.coral" : "haccs.cream"}
                position="relative"
                _hover={{ color: "haccs.coral" }}
                transition="color 0.2s"
                _after={
                  location.pathname === link.path
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        bg: "haccs.coral",
                      }
                    : {}
                }
              >
                {link.name}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* CTA Button */}
        <Button
          display={{ base: "none", md: "flex" }}
          variant="outline"
          borderColor="haccs.coral"
          color="haccs.coral"
          fontFamily="heading"
          fontWeight={600}
          px={6}
          _hover={{ bg: "haccs.coral", color: "white" }}
          transition="all 0.3s"
        >
          EXPLORE MORE
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", lg: "none" }}
          aria-label="Open menu"
          variant="ghost"
          color="haccs.cream"
          fontSize="24px"
        >
          <Box as="span">☰</Box>
        </IconButton>
      </Flex>
    </Box>
  );
};

export default React.memo(Navbar);
