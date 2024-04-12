import { Film } from "../Film/Film"
import { ListOfFilms } from "./FilmList.styled"
import database from '../../database.json'

export const FilmList = () => {
    return (
        <>
            <ListOfFilms>
                {database.map(film => (
                    <Film key={film.id} film={film} />
                ))}
            </ListOfFilms>
        </>

    )

}