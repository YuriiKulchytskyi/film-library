import styled from "styled-components";

export const DetailsWrapper = styled.div `
    width: 100px;
`;

export const MovieDetailsContainer = styled.div `
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    @media screen and (max-width: 360px) {
        width: 100%;
    }
`;

export const DetailsInfo = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;

export const OptionsButtons = styled.div `
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
