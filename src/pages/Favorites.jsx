import { ListOfMovies } from "../components/MovieList/MovieList.styled";
import { Movie } from "../components/MovieList/Movie";
import { useEffect, useState } from "react";
import { Warning } from "./Favorites.styled";


export const Favorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return storedFavorites;
  });

  // const dispatch = useDispatch()
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "favorites") {
        setFavorites(JSON.parse(event.newValue) || []);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const isMovieInFavorites = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  const toggleFavorite = (movie) => {
    if (!isMovieInFavorites(movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };


  return (
    <>
      {favorites.length !== 0 ? <ListOfMovies>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <Movie movie={movie} onClick={() => toggleFavorite(movie)}/>
          </li>
        ))}
      </ListOfMovies> : <Warning>List is empty...</Warning>}
    </>
  );
};
