import { Box } from "@chakra-ui/react";
import React from "react";

const DecorativeCirclesChakra: React.FC = () => {
  return (
    <>
      {/* Top right large circle */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="haccs.coral"
        opacity={0.1}
        pointerEvents="none"
      />
      
      {/* Bottom left medium circle */}
      <Box
        position="absolute"
        bottom="200px"
        left="-80px"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="haccs.coral"
        opacity={0.08}
        pointerEvents="none"
      />
      
      {/* Middle right small circle */}
      <Box
        position="absolute"
        top="50%"
        right="50px"
        w="100px"
        h="100px"
        borderRadius="full"
        bg="haccs.coralLight"
        opacity={0.1}
        pointerEvents="none"
      />
      
      {/* Top left tiny circle */}
      <Box
        position="absolute"
        top="150px"
        left="100px"
        w="50px"
        h="50px"
        borderRadius="full"
        bg="haccs.coral"
        opacity={0.15}
        pointerEvents="none"
      />
    </>
  );
};

export default React.memo(DecorativeCirclesChakra);
