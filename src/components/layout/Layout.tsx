import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DecorativeCirclesChakra from "../DecorativeCirclesChakra";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" bg="haccs.navy" position="relative" overflow="hidden">
      <DecorativeCirclesChakra />
      <Navbar />
      <Box as="main" pt="80px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default React.memo(Layout);
