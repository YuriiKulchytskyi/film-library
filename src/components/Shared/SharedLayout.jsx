import { Header, NavWrapper, Navigation } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
      <>
        <Header>
          <NavWrapper>
            <Navigation to="/">Movie List</Navigation>
            <Navigation to="/favorites">Favorite Movies</Navigation>
            <Navigation to="/add">Add new movie</Navigation>
          </NavWrapper>
        </Header>
      </>
    );

}