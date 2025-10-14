import React from "react";
import { Box, HStack, Text, Stack } from "@chakra-ui/react";
import {AchievementsTitle, HaccsAchievements} from '../resources/constants/achievementsConstants'
import Footer from "../components/footer";

const Achievements = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            marginTop: '10%',
            marginLeft: '7%'
        }}>
            <Stack>
                
                <AchievementsTitle />
                
                <HStack style={{
                    paddingTop: '5%', marginLeft: '2%'
                }}>
                    <Box style={{border: '1px solid white', height: '140px', width: '0px', marginRight: '2%' }} /> 
                    <Text style={{
                        width: '650px',fontFamily: 'Odibee Sans, sans-serif', 
                        lineHeight: '32px', letterSpacing: '0px', fontSize: '26px', 
                    }}>
                        {HaccsAchievements}
                    </Text>
                </HStack>

                <div style={{
                    marginTop: '7%', marginLeft: '-4%'
                }}>
                    <Footer direction="horizontal" />
                </div>

            </Stack>
            <div style={{marginLeft: "100px",}}>
                
                <Box style={{border: '1px solid red', marginBottom: '10%', width: '686px'}} />
                <Box style={{position: 'absolute', border: '1px solid red', height: '686px', width: '0px', marginRight: '0%'}} />

                <Box style={{width: '500px', height: '500px', border: '1px solid white'}}>
                    Take as Big Image
                </Box>

            </div>    
        </div>
    )
};

export default React.memo(Achievements);