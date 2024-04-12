import {
  FilmContainer,
  FilmDescriptionList,
  IconsWrapper,
  Image,
  ImageWrapper,
  TitleLine,
} from "./Film.styled";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { DescItem, Svg } from "../Modal/Modal.styled";
import icons from "../../images/icons.svg";

export const Film = ({ film, onClose }) => {
  const { image, title, rating, release_date } = film;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const hideModal = () => {
    setIsModalOpen(false)
  }

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
          <Svg>
            <use href={`${icons}#icon-watch-later`}></use>
          </Svg>
        </li>
        <li>
          <Svg>
            <use href={`${icons}#icon-add-to-list`}></use>
          </Svg>
        </li>
        <li>
          <Svg>
            <use href={`${icons}#icon-heart`}></use>
          </Svg>
        </li>
      </IconsWrapper>
      {isModalOpen && <Modal onClose={hideModal} film={film} />}
    </FilmContainer>
  );
};
