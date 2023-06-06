import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const ArticlePart = styled.div`
  background-color: ${COLOR_WHITE};
  color: ${PRIMARY_COLOR};
  .title {
    display: flex;
    justify-content: center;
  }
  .body {
    display: flex;
    justify-content: center;
    height: 350px;
  }
`;
export const CreatePage = styled.div`
  margin-left: 20px;
`;

export const List = styled.div`
  height: 370px;
  display: block;
  overflow: scroll;
  .lists {
    text-decoration: none;
    color: ${PRIMARY_COLOR};
  }
  .lists:hover {
    color: orange;
  }
`;

export const Updating = styled.div`
  // display:flex;
  padding-left: 30px;

  .title {
    // display:flex;
    // justify-content:center;
  }
`;

export const HeaderPart = styled.div`
  .title {
    text-decoration: none;
    color: ${PRIMARY_COLOR};
  }
`;

export const FullBody = styled.div`
  color: ${PRIMARY_COLOR};
  display: flex;
  justify-content: center;
  height: 600px;
  padding-bottom: 120px;
  background-color: ${COLOR_WHITE};
  .button1 {
    text-decoration: none;
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    border-radius: 10px;
    padding: 10px;
    margin: 0 10px 0 300px;
  }
  .button2 {
    text-decoration: none;
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    border-radius: 10px;
    padding: 10px;
  }
`;

export const ListPart = styled.div`
  width: 300px;
  height: 500px;
  background: ${COLOR_WHITE};
  margin: 10px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR};
  border-width: 10px;
  .title {
    display: flex;
    justify-content: center;
  }
  .buttons {
    text-decoration: none;
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    border-radius: 10px;
    padding: 10px;
    margin: 20px 20px 20px 100px;
  }
`;

export const OneArticle = styled.div`
  width: 500px;
  height: 500px;
  background: ${COLOR_WHITE};
  margin: 10px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR};
  border-width: 10px;
`;
