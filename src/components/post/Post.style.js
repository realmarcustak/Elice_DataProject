import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const PostSection = styled.div`
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 15px;

  .pageName {
    position: absolute;
    left: 42%;
    width: 200px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 5px;
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    border-radius: 40px;
  }

  .button {
    position: absolute;
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
    border: none;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
    margin-left: 1100px;
    top: 200px;
  }

  table {
    text-align: center;
    border-spacing: 0;
    width: 1000px;
    margin: 110px auto;
    margin-bottom: 70px;
    border-top: solid ${PRIMARY_COLOR} 20px;
    border-bottom: solid white 20px;
    border-radius: 20px;
  }

  .table-head {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
  }
  .table-body {
    background-color: white;
  }
  .title {
    text-decoration: none;
    color: ${PRIMARY_COLOR};
  }
  th {
    padding-bottom: 20px;
  }
  td {
    border-top: 1px solid ${PRIMARY_COLOR};
    padding: 20px;
  }
`;
