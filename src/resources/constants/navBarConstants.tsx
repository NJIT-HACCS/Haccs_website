import HaccsLogo from '../images/haccsLogo.png'
import { useLocation } from "react-router";
import { Link, Text } from "@chakra-ui/react";
import React from 'react';
export const HighlanderHub = "https://njit.campuslabs.com/engage/organization/haccs";
export const logo = HaccsLogo;

interface NavBarProps {
    path: string,
}

const pathHeaders : { [key: string]: string } = {
    "/": 'home',
    "/aboutus": 'about us',
    "/gallery": 'gallery',
    "/achievements": 'achievements',
    "/events": 'events',
    "/contactus": 'contact us'
}

export const NavBarLink = (props: NavBarProps) : React.JSX.Element=> {
    const location = useLocation();
    const getOpacity = (): boolean => {
        const normalize = (p: string) => (p.replace(/\/+$/, "") || "/");
        return normalize(location.pathname) === normalize(props.path);
    };
    const isPath = getOpacity();
    return (
        <Link href={props.path} outlineColor={'transparent'}>
            <Text textStyle='4xl' style={{
                textDecoration: `${isPath ? 'underline' : 'none'}`,
                opacity: `${isPath ? 1 : 0.5}`,
                letterSpacing: '0px',
                fontSize: '30px',
                
            }}>
                {pathHeaders[props.path].toUpperCase()}
            </Text>            
        </Link>
    )
}