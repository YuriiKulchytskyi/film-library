import styled from "styled-components";

export const ModalContentWrapper = styled.div `
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    padding: 10px;

`

export const Backdrop = styled.div `
       position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.5);
         display: flex;
         justify-content: center;
         z-index: 1000;
         align-items: center;
`

export const ModalWindow = styled.div `
        background-color: '#fff';
        padding: 20px;
        border-radius: 8px;
        width: 900px;
        height: 320px;
        overflow: auto;
        position: relative;
        z-index: 1001;
        border: 1px solid black;
        background-color: #fff;
        overflow-y: hidden;

        @media screen and (max-width: 1439px){
            width: 80%;
            padding: 20px;
        }
        
        @media screen and (max-width: 767px){
            flex-direction: column;
            width: 70%;
            height: 350px;
        }
`
export const CloseBtn = styled.button `
    width: 10px;
    height: 10px;
    border: none;
    background-color: transparent;
    text-align: center;
    position: absolute;
    right: 10px;
`
export const ModalImage = styled.img `
    width: 200px;
    height: 300px;

    @media screen and (max-width: 767px){
            width: 200px;
        }
`

export const ModalDescriptionContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`

export const ModalDescriptionList = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-bottom: 20px;
    row-gap: 20px;
    position: relative;


    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
        bottom: 0;
    }
`

export const FilmTitle = styled.h2 `
    margin: 0;
`

export const Genre = styled.p `
    margin: 0;
    text-transform: capitalize;
`

export const Svg = styled.svg `
    width: 20px;
    height: 20px;
    transition: .3s ease-in-out;

    &:hover{
        transform: scale(1.2);
    }
`

export const DescItem = styled.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const DescTitle = styled.h3 `
    margin: 0;
`

export const SvgList = styled.ul `
    display: flex;
    flex-direction: row;
    list-style: none;
    position: absolute;
    width: 100px;
    height: 20px;
    justify-content: space-between;
    right: 40px;
    top: 0;
    padding: 0;

    @media screen and (max-width: 1440px) {
          right: 70px;
          top: 27px;
    }

    @media screen and (max-width: 767px) {
        left: 80px;
        top: 350px    
    }

`