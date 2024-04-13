import {
  Backdrop,
  CloseBtn,
  DescItem,
  DescTitle,
  Description,
  FilmTitle,
  Genre,
  ModalContentWrapper,
  ModalDescriptionContainer,
  ModalDescriptionList,
  ModalImage,
  ModalWindow,
  Svg,
  SvgList,
} from "./Modal.styled";
import icons from "../../images/icons.svg";
import { useEffect } from "react";

export const Modal = ({ onClose, film }) => {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains("backdrop")) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Backdrop className="backdrop">
      <ModalWindow>
        <ModalContentWrapper>
          <div>
            <ModalImage src={film.image} alt="" />
          </div>
          <ModalDescriptionContainer>
            <ModalDescriptionList>
              <CloseBtn onClick={onClose}>X</CloseBtn>
              <DescItem>
                <FilmTitle>{film.title}</FilmTitle>
              </DescItem>
              <DescItem>
                <Svg>
                  <use href={`${icons}#icon-star`}></use>
                </Svg>
                {film.rating}
              </DescItem>
              <DescItem>
                <Genre>
                  {Array.isArray(film.genre)
                    ? film.genre.join(", ")
                    : film.genre}
                </Genre>
              </DescItem>
              <DescItem>{film.director}</DescItem>
              <DescItem>{film.actors.join(", ")}</DescItem>
            </ModalDescriptionList>
            {/* <SvgList>
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
            </SvgList> */}
            <Description>
              <DescTitle>Description</DescTitle>
              {film.description}
            </Description>
          </ModalDescriptionContainer>
        </ModalContentWrapper>
      </ModalWindow>
    </Backdrop>
  );
};
