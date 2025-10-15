import React from "react";
import { Box, HStack, Text, Stack } from "@chakra-ui/react";
import { AchievementsTitle, HaccsAchievements } from '../resources/constants/achievementsConstants'
import Footer from "../components/footer";

const TextAndContent = () => {
	return (
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
       )
}

const AchievementsImages = () => {	
	// This is where the images for the achievements go, can be any of our major or minor achievements. 
	// When adding images, add the 'Image' object to the Chakra import.
	// Either replace the 'Box' to an 'Image' or add 'Image' to the 'Box' element.
	return (
            <Box style={{marginLeft: "100px", width: "701px", height: '738px'}}>
                
		<Box style={{border: '1px solid white', marginBottom: '8%', marginLeft: '3%', width: '686px'}} /> 
		<Box style={{position: 'absolute', border: '1px solid white', height: '560px', width: '0px', marginRight: '0%', }} />
		
		<HStack style={{
			marginLeft: '5%',
		}}>
				
			<Stack style={{ width: '100%', }}>
				<Box style={{ border: '1px solid white', width: '100%', height: '215px' }} />
				<Box style={{ border: '1px solid white' , margin: '5%', marginRight: '20%', marginLeft: '20%', paddingTop: '5%', paddingBottom: '5%', }}>
					
					<Text style={{
						display: 'flex', justifyContent: 'center',
						width: '100%',fontFamily: 'Odibee Sans, sans-serif', 
						lineHeight: '32px', letterSpacing: '0px', fontSize: '26px',
					}}> 
						AI Always Wins 
					</Text>	
				</Box>
			
				<Box style={{ border: '1px solid white', width: '100%', height: '215px' }} />
				
			</Stack>

			<Box style={{
				border: '1px solid white', width: '100%', height: '540px', marginLeft: '5%',
			}}/>
		</HStack>

	    </Box>    
       )
}

const Achievements = () => {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'start',
            marginTop: '5%', marginLeft: '7%'
        }}>
		<TextAndContent />
		<AchievementsImages /> 
	</div>
    )
};

export default React.memo(Achievements);
