import React, { ElementType } from "react";
import { Box, Link, Text, Icon, Heading, HStack } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go"
import { HACCS, NJIT, HaccsMessage } from '../resources/constants/homeConstants';
import Footer from "../components/footer";


const Home = () => {
    return (
        <div>
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: "start",
                marginTop: '10%', marginLeft: '7%', marginBottom: '-3%'
            }}>

                <Text textStyle="3xl">
                    {NJIT}
                </Text>
                
                <Heading textStyle="7xl" style={{
                    width: '1448px', fontSize: '128px',
                    fontFamily: 'Odibee Sans, sans-serif', fontWeight: '200',
                    lineHeight: '115%', letterSpacing: '0px'
                }}>
                    {HACCS.toUpperCase()}
                </Heading>

                <Box style={{
                    width: '120px', marginTop: '2%',
                    border: '2px solid white',
                }} />

                <Link href="/gallery" outline='transparent'>
                    <Box style={{
                        display: 'flex',
                        paddingTop: '20%',
                        alignItems: 'center',
                    }}>
                        <Text>
                            LEARN MORE 
                        </Text>
                        <div style={{
                                display: 'flex',
                        }}>
                            <Icon as={GoArrowRight as ElementType} boxSize={65} />
                            <Box style={{
                                position: 'relative', border: '1px solid #F5886F',
                                right: '36%', top: '8px', width: '50px', height: '50px'
                            }} />
                        </div>
                    </Box>
                </Link>

            </div>
            <HStack direction={{base: 'row', md: 'column'}} gap={{base: '47%'}} style={{ marginTop: '3%' }}>
                <Footer direction="vertical"/>
                <HStack>
                    <Box style={{border: '1px solid white', height: '150px', width: '0px', marginRight: '3%' }} />    
                    <Text style={{
                        width: '625px', fontFamily: 'Odibee Sans, sans-serif', 
                        lineHeight: '115%', letterSpacing: '0px', fontSize: '28px', 
                    }}>
                        {HaccsMessage}
                    </Text>
                </HStack>
            
            </HStack>

        </div>
    )
};

export default React.memo(Home);