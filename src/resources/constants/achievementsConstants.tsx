import React from "react";
import { Heading, Box } from "@chakra-ui/react";

export const HaccsAchievements = `
In it’s first year, HACCS has been able to accrue almost 100+ members, 
which can be contributed to NJIT recently become a Hispanic Serving Institution. 
We have hosted panels including professionals from Prudential, Lockheed Martin, Apple & the U.S. Department of Defense. 
We have provided resources to our members through CAHSI (Computing Alliance of Hispanic Serving Institutions).
`;

export const AchievementsTitle = (): React.JSX.Element => {

    return(
        <Box style={{width: '450px' }}>
            <Heading style={{
                fontSize: '128px',
                fontFamily: 'Odibee Sans, sans-serif', fontWeight: '200',
                lineHeight: '70%', letterSpacing: '1%'
            }}>
                {"HACCS"}
                <span style={{
                    fontSize: '86px', fontFamily: 'Odibee Sans, sans-serif', fontWeight: '100',
                    lineHeight: '100%', letterSpacing: '1%'

                }}>
                    {" ACHIEVEMENTS".toUpperCase()}
                </span>
            </Heading>
        </Box>
    )
}