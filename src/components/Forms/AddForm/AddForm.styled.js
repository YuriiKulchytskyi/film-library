import styled from "styled-components";

export const FormContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* width: 420px; */
    height: 450px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: yellow;
    border-radius: 20px;
`

export const LabelContainer = styled.div `
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 `   

export const Label = styled.label`
`

export const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    margin-top: 20px;
`
