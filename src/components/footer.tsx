import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Stack, Icon, Box, HStack, Link } from '@chakra-ui/react'
import React, { ElementType } from "react";

interface Footerprops {
    direction: string,
};

interface LinkedIconsProps {
	redirect: string,
	icon: ElementType,
}

const LinkedIcon = (props: LinkedIconsProps ) : React.JSX.Element => {
	return (
		<Link href={props.redirect}>
			<Icon as={props.icon} />
		</Link>
	)
}
const verticalFooter: React.JSX.Element = 
(   
    <Stack style={{
        marginLeft: '5%', marginTop: '3%', gap: '15px'
    }}>
	<LinkedIcon redirect="https://discord.gg/35uBvfY5Dr" icon={FaDiscord as ElementType} />
	<LinkedIcon redirect="https://www.instagram.com/njit_haccs/" icon={FaInstagram as ElementType} />
	<LinkedIcon redirect="https://www.linkedin.com/in/njit-haccs-679151296/" icon={FaLinkedin as ElementType} />

	<Box style={{border: '1px solid white', height: '70px', width: '0px', marginLeft: '50%' }} />
    </Stack>
);

const horizontalFooter: React.JSX.Element = 
(
    <HStack style={{
        marginLeft: '5%', marginTop: '3%', gap: '15px'
    }}>
    	<Box style={{border: '1px solid white', height: '0px', width: '47px' }} />

		<LinkedIcon redirect="https://www.linkedin.com/in/njit-haccs-679151296/" icon={FaLinkedin as ElementType} />
		<LinkedIcon redirect="https://www.instagram.com/njit_haccs/" icon={FaInstagram as ElementType} />
		<LinkedIcon redirect="https://discord.gg/35uBvfY5Dr" icon={FaDiscord as ElementType} />
    </HStack>

);
const Directions: { [key: string]: React.JSX.Element } = {
    "vertical": verticalFooter, 
    "horizontal": horizontalFooter,
};

const Footer = ( props: Footerprops ) : React.JSX.Element => { return Directions[props.direction]; }

export default React.memo(Footer);
