import { Link, HStack, Box, Image, Text } from "@chakra-ui/react";
import { HighlanderHub } from "../resources/constants/navBarConstants";
import { logo } from "../resources/constants/navBarConstants";
import React from "react";
import { useLocation } from "react-router";
const NavBar = () => {

    const getOpacity = (path: string): boolean => {
        const normalize = (p: string) => (p.replace(/\/+$/, "") || "/");
        return normalize(location.pathname) === normalize(path);
    };

    const location = useLocation();
    
    return (
        <div style={{paddingTop: '2%'}}>
            <HStack justify='start' width='100%' gap={{ base: 0, md: 10 }} paddingLeft='50px'>
                
                <Link href="/" paddingRight='10%'>
                    <Image src={logo} alt="tempImage" style={{
                        width: '125px',
                        height: '125px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        borderStyle: 'hidden',                    
                    }}/>
                </Link>

                {/* I hate this code, its almost 3 am and i work in the morning. Nav bar is done. */}
                <Link href="/" >
                    {(() => {
                        const isPath = getOpacity('/');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                HOME
                            </Text>
                        );
                    })()}
                </Link>
                <Link href="/aboutus">
                    {(() => {
                        const isPath = getOpacity('/aboutus');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                ABOUT US
                            </Text>
                        );
                    })()}
                </Link>
                <Link href="/gallery">
                    {(() => {
                        const isPath = getOpacity('/gallery');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                GALLERY
                            </Text>
                        );
                    })()}
                </Link>
                <Link href="/achievements">
                    {(() => {
                        const isPath = getOpacity('/achievements');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                ACHIEVEMENTS
                            </Text>
                        );
                    })()}                
                </Link>
                <Link href="/events">
                    {(() => {
                        const isPath = getOpacity('/events');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                EVENTS
                            </Text>
                        );
                    })()}                
                </Link>
                <Link href="/contactus">
                    {(() => {
                        const isPath = getOpacity('/contactus');
                        return (
                            <Text
                                textStyle='4xl'
                                style={{
                                    textDecoration: isPath ? "underline" : "",
                                    opacity: isPath ? 1 : 0.5
                                }}>
                                CONTACT US
                            </Text>
                        );
                    })()}
                </Link>
                
                <Link href={HighlanderHub} style={{
                    paddingLeft: '10%',
                    paddingTop: '0',
                }}>
                    <Box style={{
                        border: '1px solid white',
                        padding: '18px',
                        paddingLeft: '25px',
                        paddingRight: '25px'
                    }}>
                        
                    <Text textStyle='3xl'>EXPLORE MORE</Text>
                    </Box>
                </Link>

            </HStack>
        </div>
    )
};

export default React.memo(NavBar);