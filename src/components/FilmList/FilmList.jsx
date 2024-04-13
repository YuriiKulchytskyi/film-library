import { Film } from "../Film/Film"
import { ListOfFilms } from "./FilmList.styled"
import database from '../../database.json'

export const FilmList = () => {
    return (
      <>
        <ListOfFilms>
          {database.map((film) => (
            <li key={film.id}>
              <Film film={film} />
            </li>
          ))}
        </ListOfFilms>
      </>
    );

}