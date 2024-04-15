import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../redux/moviesSlice";
import { useEffect } from "react";
import { deleteExistingMovie, fetchMovies } from "../../redux/moviesOperations";
import { Movie } from "./Movie";
import { ListOfMovies, MovieListWrapper } from "./MovieList.styled";
import Filter from "../Filter/Filter";
import { selectFilteredMovies } from "../../redux/selectors";

export const MovieList = () => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector(selectFilteredMovies)

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const isMovieInFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((movie) => movie.id === id);
  };

  const toggleFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isMovieInFavorites(movie.id)) {
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteExistingMovie(id)).then(() => {
      dispatch(fetchMovies());
    });
  };


  return (
    <MovieListWrapper>
      <Filter />
      <ListOfMovies>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <Movie
              movie={movie}
              onClick={() => toggleFavorite(movie)}
              onDelete={() => handleDelete(movie.id)}
            />
          </li>
        ))}
      </ListOfMovies>
    </MovieListWrapper>
  );
};
