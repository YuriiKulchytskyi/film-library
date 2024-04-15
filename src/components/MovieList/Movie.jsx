import { Image, ImageWrapper, InfoList, MovieCard, MovieTitle, Svg } from "./MovieList.styled"
import icons from '../../images/icons.svg'

export const Movie = ({movie, onClick, onDelete} ) => {
    return (
      <MovieCard>
        <div>
          <Image src={movie.image} alt={movie.title}/>
        </div>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          <InfoList>
            <li>{movie.rating}</li>
            <li>{movie.director}</li>
            <li>{(movie.release_date.split('-').reverse().join('.'))}</li>
          </InfoList>
          <button onClick={onClick}>
            <Svg>
              <use href={`${icons}#icon-heart-red`}></use>
            </Svg>
          </button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </MovieCard>
    );
}