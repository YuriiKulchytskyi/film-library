import { Header } from "../components/Header/Header";
import { FilmList } from "../components/FilmList/FilmList";
import { useDispatch } from "react-redux";
import { fetchTrendingMovies } from "../redux/films/filmsOperations";
import { getFilms } from "../redux/films/filmsSelectors";
import { Button } from "./ListPage.styled";

export const ListPage = () => {
  return (
    <>
      {/* <Header /> */}
      <FilmList />
    </>
  );
};
