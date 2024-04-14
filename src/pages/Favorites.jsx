import { useSelector } from "react-redux";
import { getFavorites } from "../redux/films/filmsSelectors";
import { Film } from "../components/Film/Film";

export const Favorites = () => {
  const favorites = useSelector(getFavorites);
  console.log(22, favorites);

  return (
    <ul>
      {favorites.map((film) => (
        <li key={film.id}>
          <Film film={film} />
        </li>
      ))}
    </ul>
  );
};
