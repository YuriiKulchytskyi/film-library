import { NavLink } from "react-router-dom"
import { HeaderContainer, NavList, NavListItem } from "./Header.styled"

export const Header = () => {
    return (
        <HeaderContainer>
            <NavList>
                {/* <NavLink to='/'>Home</NavLink> */}
                <NavLink to='/'>List</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
                <NavLink>Watch Later</NavLink>
            </NavList>
        </HeaderContainer>
    )
}