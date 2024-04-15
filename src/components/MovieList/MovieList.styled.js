import styled from "styled-components";

export const MovieCard = styled.div `
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Image = styled.img `
    width: 100%;
    height: 230px;

`
export const ImageWrapper = styled.div `
    width: 200px;
    height: 250px;
`
export const ListOfMovies = styled.ul `
    width: 1440px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0;
    margin-top: 70px;
`

export const MovieTitle = styled.h1`
    margin: 0;
    font-size: large;
`

export const Svg = styled.svg`
    width: 20px;
    height: 20px;
`

export const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`
