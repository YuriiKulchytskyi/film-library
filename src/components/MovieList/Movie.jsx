import {
  Button,
  ButtonsWrapper,
  Image,
  ImageWrapper,
  InfoButtonContainer,
  InfoList,
  MovieCard,
  MovieTitle,
  Svg,
} from "./MovieList.styled";
import icons from "../../images/icons.svg";
import { useNavigate } from "react-router-dom";

export const Movie = ({ movie, onClick, onDelete }) => {
  const navigate = useNavigate()

  return (
    <MovieCard>
      <ImageWrapper>
        <Image src={movie.image} alt={movie.title} onClick={()=>navigate(`/movies/${movie.id}`)}/>
      </ImageWrapper>
      <InfoButtonContainer>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          <InfoList>
            <li>{movie.rating}</li>
            <li>{movie.director}</li>
            <li>{movie.release_date.split("-").reverse().join(".")}</li>
          </InfoList>
        </div>
        <ButtonsWrapper>
          <Button onClick={onClick}>
            <Svg>
              <use href={`${icons}#icon-heart-red`}></use>
            </Svg>
          </Button>
          <Button onClick={onDelete}>
            <Svg>
              <use href={`${icons}#icon-trash-bucket`}></use>
            </Svg>
          </Button>
        </ButtonsWrapper>
      </InfoButtonContainer>
    </MovieCard>
  );
};
