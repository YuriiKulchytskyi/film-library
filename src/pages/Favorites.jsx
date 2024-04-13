import { useSelector } from "react-redux"
import { getFavorites } from "../redux/filsms/filmsSelectors"
import { Film } from "../components/Film/Film";

export const Favorites = () => {

    const favorites = useSelector(getFavorites)

    return (
      <ul>
        {favorites.map((film) => (
          <li key={film.id}>
            <Film film={film} />
          </li>
        ))}
      </ul>
    );

}