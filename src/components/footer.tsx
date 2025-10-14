import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Stack, Icon, Box, HStack } from '@chakra-ui/react'
import React, { ElementType } from "react";

interface Footerprops {
    direction: string,
};

const verticalFooter: React.JSX.Element = 
(   
    <Stack style={{
        marginLeft: '5%', marginTop: '3%', gap: '15px'
    }}>
        <Icon as={FaDiscord as ElementType} />
        <Icon as={FaInstagram as ElementType} />
        <Icon as={FaLinkedin as ElementType} />
        <Box style={{border: '1px solid white', height: '70px', width: '0px', marginLeft: '50%' }} />
    </Stack>
);

const horizontalFooter: React.JSX.Element = 
(
    <HStack style={{
        marginLeft: '5%', marginTop: '3%', gap: '15px'
    }}>
        <Box style={{border: '1px solid white', height: '0px', width: '47px' }} />
        <Icon as={FaDiscord as ElementType} />
        <Icon as={FaInstagram as ElementType} />
        <Icon as={FaLinkedin as ElementType} />

    </HStack>

);
const Directions: { [key: string]: React.JSX.Element } = {
    "vertical": verticalFooter, 
    "horizontal": horizontalFooter,
};

const Footer = ( props: Footerprops ) : React.JSX.Element => { return Directions[props.direction]; }

export default React.memo(Footer);
