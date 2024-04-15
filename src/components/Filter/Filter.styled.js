import styled from "styled-components";

export const Input = styled.input `
  width: 40%;
  min-width: 200px;
  height: 20px;
  margin: 50px auto 0;
  padding-left: 10px;

  @media screen and (max-width: 360px) {
    width: 80%;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 50%;
  }
`;