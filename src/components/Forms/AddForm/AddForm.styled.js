import {
    Field
} from "formik";
import styled from "styled-components";

export const FormContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70%;
    height: 450px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: bisque;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        width: 80%;
        height: auto;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
    }
`;

export const LabelContainer = styled.div `
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SubmitButton = styled.button `
    width: 90%;
    height: 50px;
    margin-top: 20px;

    @media screen and (max-width: 360px) {
        width: 100%;
    }
`;

export const Input = styled(Field)`
    height: 20px;
    padding-left: 10px;
    border-radius: 8px;
    border-color: transparent;

    @media screen and (max-width: 360px) {
        width: 100%;
    }
`;
