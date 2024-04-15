import {
    NavLink
} from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div `
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: bisque;
    
    @media screen and (max-width: 768px) {
        height: 60px;
    }
`;

export const NavWrapper = styled.nav `
    width: 66%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    
    @media screen and (max-width: 360px) {
        width: 90%;
    }
`;

export const Navigation = styled(NavLink)`
    font-weight: 700;
    color: #242424;
`;