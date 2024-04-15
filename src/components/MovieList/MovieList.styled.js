import styled from "styled-components";

export const MovieCard = styled.div `
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    background-color: bisque;
    
    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:hover{
        cursor: pointer;
    }
`;

export const ImageWrapper = styled.div `
    width: 100%;
`;

export const ListOfMovies = styled.ul `
    /* width: 80%; */
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;  
    padding: 40px;
    margin: 0 auto;
    

    
    @media screen and (max-width: 360px) {
        padding: 20px;
    }
`;

export const MovieTitle = styled.h1 `
    margin: 10px 0;
    font-size: 1.2rem;
    text-align: center;
`;

export const Svg = styled.svg `
    width: 20px;
    height: 20px;
`;

export const InfoList = styled.ul `
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MovieListWrapper = styled.div `
    display: flex;
    flex-direction: column;
`;

export const InfoButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: 0 10px 10px 10px;
`;

export const ButtonsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 10px;
`;

export const Button = styled.button `
    border: 1px solid black;
`;
