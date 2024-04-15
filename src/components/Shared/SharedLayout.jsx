import { Header, NavWrapper, Navigation } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
      <Header>
        <NavWrapper>
          <Navigation to="/">List</Navigation>
          <Navigation to="/favorites">Favorites</Navigation>
          <Navigation to="/add">Add new movie</Navigation>
        </NavWrapper>
      </Header>
    );

}