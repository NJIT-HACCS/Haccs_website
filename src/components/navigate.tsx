import { Link, Stack, Box, Image, Text } from "@chakra-ui/react";
import { HighlanderHub, logo, NavBarLink } from "../resources/constants/navBarConstants";
import React from "react";
const NavBar = () => {
    return (
        <div style={{paddingTop: '1%'}}>
            <Stack justify='start' width='100%' gap={{ base: 0, md: 12 }} direction={{base: 'column', md: 'row'}} paddingLeft='60px'>
                
                <Link href="/" marginRight='6%' outlineColor='#00000000'>
                    <Image src={logo} alt="HaccsLogo" style={{
                        width: '115px',
                        height: '115px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        borderStyle: 'hidden',
                    }}/>
                </Link>

                {/* I hate this code, its almost 3 am and i work in the morning. Nav bar is done. */}
                <NavBarLink path="/" />
                <NavBarLink path="/aboutus" />
                <NavBarLink path="/gallery" />
                <NavBarLink path="/achievements" />
                <NavBarLink path="/events" />
                <NavBarLink path="/contactus" />

                <Link href={HighlanderHub} style={{
                    marginLeft: '15%', paddingTop: '0', outlineColor: 'transparent',

                }}>
                    <Box style={{
                        border: '1px solid white', padding: '18px',
                        paddingLeft: '25px', paddingRight: '25px',
                    }}>
                        
                    <Text textStyle='3xl'>EXPLORE MORE</Text>
                    </Box>
                </Link>

            </Stack>
        </div>
    )
};

export default React.memo(NavBar);