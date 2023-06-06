import styled from "styled-components";
import { COLOR_WHITE, PRIMARY_COLOR } from "../../styles/color";

export const Card = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 650px;
  background-color: ${COLOR_WHITE};

  .nameList {
    display: flex;
    justify-content: center;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }

  .name {
    width: 300px;
    margin: auto;
    padding: 25px 0;
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
    font-size: 25px;
    font-weight: bold;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
`;
