import styled from "styled-components";
import {
  COLOR_WHITE,
  PRIMARY_COLOR,
  COLOR_LIGHT_GREEN,
} from "../../styles/color";

export const Chart = styled.div`
  background-color: ${COLOR_WHITE};
  display: block;
  text-align: center;
  margin: auto;
  width: 100%;
  color: ${PRIMARY_COLOR};

  .wrapper {
    padding: 50px;
    padding-bottom: 200px;
  }

  .chartDesTitle {
    font-size: 70px;
    font-weight: bold;
    text-align: left;
    padding: 100px 30px 0px 100px;
  }

  .chartDesTitle2 {
    font-size: 70px;
    font-weight: bold;
    text-align: end;
    padding: 20px 150px 0px 200px;
  }

  .chartDes {
    color: ${PRIMARY_COLOR};
    padding: 20px 270px 20px 10px;
    text-align: center;
    padding: 80px 30px 30px 30px;
    font-size: 25px;
    opacity: 0.6;
  }

  /* chart style */
  .chartFlex {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .chartTitle {
    opacity: 0;
    /* margin: auto;
    margin-top: 20px;

    text-align: center;
    font-size: 20px;
    color: ${COLOR_WHITE};
    padding-top: 10px;

    width: 170px;
    height: 40px;

    background: ${PRIMARY_COLOR};
    border-radius: 2010px; */
  }

  .chartBack {
    text-align: center;
    color: ${PRIMARY_COLOR};

    margin: auto;
    margin-top: 15px;
    display: block;
    padding-top: 30px;

    width: 500px;
    height: 300px;
    background: ${PRIMARY_COLOR};
    border-radius: 10px;
  }
`;
