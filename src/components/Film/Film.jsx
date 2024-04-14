import {
  FilmContainer,
  FilmDescriptionList,
  IconsWrapper,
  Image,
  ImageWrapper,
  SvgButton,
  TitleLine,
} from "./Film.styled";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { DescItem, Svg } from "../Modal/Modal.styled";
import icons from "../../images/icons.svg";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  addToWatchLater,
  removeFromFavorites,
  removeFromWatchLater,
  setAllFavoritesFromLocalStorage,
} from "../../redux/films/filmsSlice";
import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/films/filmsSelectors";

export const Film = ({ film, onClose }) => {
  const { id, image, title, rating, release_date } = film;
  const favorites = useSelector(getFavorites);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isToWatchLater, setIsToWatchLater] = useState(false);

  const iconAdd = isFavorite ? "add-to-list-added" : "add-to-list";
  const iconWatchLater = isToWatchLater ? "watch-later-added" : "watch-later";

  useEffect(() => {
    if (favorites.some(({ id: favoriteFilmId }) => favoriteFilmId === id)) {
      setIsFavorite(true);
    }

    const watchLaterFromStorage = localStorage.getItem(
      `watch_later_${film.id}`
    );
    if (watchLaterFromStorage !== null) {
      setIsToWatchLater(true);
    }
  }, [film.id]);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addToFavorite(film));
      localStorage.setItem(`favorites`, JSON.stringify([film]));
    } else {
      dispatch(removeFromFavorites(film.id));
      localStorage.removeItem(`favorite_${film.id}`);
    }
  };

  const handleSelectWatchLater = () => {
    setIsToWatchLater(!isToWatchLater);
    if (!isToWatchLater) {
      dispatch(addToWatchLater(film));
      localStorage.setItem(`watch_later_${film.id}`, JSON.stringify(film));
    } else {
      dispatch(removeFromWatchLater(film.id));
      localStorage.removeItem(`watch_later_${film.id}`);
    }
  };

  return (
    <FilmContainer>
      <ImageWrapper>
        <Image src={image} alt="" onClick={showModal} />
      </ImageWrapper>
      <FilmDescriptionList>
        <DescItem>
          <TitleLine>{title}</TitleLine>
        </DescItem>
        <DescItem>
          <Svg>
            <use href={`${icons}#icon-star`}></use>
          </Svg>{" "}
          {rating}
        </DescItem>
        <DescItem>{release_date.split("-").reverse().join(".")}</DescItem>
      </FilmDescriptionList>
      <IconsWrapper>
        <li>
          <SvgButton onClick={handleSelectWatchLater}>
            <Svg>
              <use href={`${icons}#icon-${iconWatchLater}`}></use>
            </Svg>
          </SvgButton>
        </li>
        <li>
          <SvgButton onClick={handleSelectFavorite}>
            <Svg>
              <use href={`${icons}#icon-${iconAdd}`}></use>
            </Svg>
          </SvgButton>
        </li>
        {/* <li>
          <SvgButton>
            <Svg>
              <use href={`${icons}#icon-${iconHeart}`}></use>
            </Svg>
          </SvgButton>
        </li> */}
      </IconsWrapper>
      {isModalOpen && <Modal onClose={hideModal} film={film} />}
    </FilmContainer>
  );
};
