import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
    width: 1440px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position: absolute;
    top: 0;

`

export const NavWrapper = styled.nav`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Navigation = styled(NavLink)`
    border: 1px solid black;
`