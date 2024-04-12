import { HeaderContainer, NavList, NavListItem } from "./Header.styled"

export const Header = () => {
    return (
        <HeaderContainer>
            <NavList>
                <NavListItem>Home</NavListItem>
                <NavListItem>List</NavListItem>
                <NavListItem>Favorite</NavListItem>
                <NavListItem>Watch Later</NavListItem>
            </NavList>
        </HeaderContainer>
    )
}