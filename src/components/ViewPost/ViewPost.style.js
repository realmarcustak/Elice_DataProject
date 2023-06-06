import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const Container = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  border-radius: 30px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR};
  border-width: 10px;
  padding: 30px;
  textarea {
    height: 100px;
    width: 500px;
  }
  button {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
    border: none;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
  }
  .modify {
    text-decoration: none;
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
    border: none;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
  }
`;
