import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    background-color: #fff;
`

export const NavList = styled.ul`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
`

export const NavListItem = styled.li`
    background-color: beige;
`