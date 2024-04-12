import styled from "styled-components";

export const FilmContainer = styled.div`
    width: 200px;
    min-height: 400px;
    border: 1px solid black;
    border-radius: 20px;
    transition: .3s;
    box-sizing: border-box;
    `

export const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    border-bottom: 1px solid black;
`

export const FilmDescriptionList = styled.ul`
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    
`


export const IconsWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding: 10px;
`

export const TitleLine = styled.p`
    height: 20px;
    margin: 0;
    overflow-y: scroll;
`