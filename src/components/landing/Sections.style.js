import styled from "styled-components";
import { COLOR_WHITE, PRIMARY_COLOR } from "../../styles/color";

export const Landing = styled.div`
  display: block;
`;

export const PictureSection = styled.div`
  .picture {
    width: 100%;
  }
`;
export const Body1 = styled.div`
  background-color: ${COLOR_WHITE};
  color: ${PRIMARY_COLOR};
  width: 100%;
  height: 800px;
  text-align: center;
  .title {
    padding-top: 100px;
    font-size: 100px;
    font-weight: bold;
  }
  .text {
    font-size: 70px;
    opacity: 0.6;
    padding: 50px;
  }
  .t1 {
    padding: 20px;
    text-align: right;
    padding-right: 200px;
  }
  .t2 {
    padding: 20px;
    text-align: left;
    padding-left: 100px;
  }
  .t3 {
    padding-top: 100px;
    font-size: 40px;
  }
`;
export const Body2 = styled.div`
  background-color: ${COLOR_WHITE};
  color: ${PRIMARY_COLOR};
  width: 100%;
  height: 700px;
  text-align: center;
  .title1 {
    font-size: 70px;
    font-weight: bold;
    text-align: left;
    padding: 150px 30px 0px 200px;
  }
  .title2 {
    font-size: 70px;
    font-weight: bold;
    text-align: right;
    padding: 20px 200px 30px 30px;
  }
  .text {
    text-align: left;
    padding: 100px 30px 30px 200px;
    font-size: 25px;
    opacity: 0.6;
  }
`;

export const Body3 = styled.div``;

export const Body4 = styled.div`
  background-color: ${COLOR_WHITE};
  display: block;
  text-align: center;
  margin: auto;
  width: 100%;
  height: 900px;
  color: ${PRIMARY_COLOR};

  .wrapper {
    padding: 30px;
  }

  .chartTitle {
    font-size: 35px;
    font-weight: bold;
  }

  .chartDes {
    color: ${PRIMARY_COLOR};
    opacity: 0.6;
    padding: 20px 200px 20px 10px;
    text-align: end;
  }
`;

export const Body5 = styled.div`
  // display: grid;
  // align-items: center;
  gap: -10px;
  height: 800px;
  background-color: ${PRIMARY_COLOR};
  .name {
    text-align: center;
    padding: 50px 0 0 0;
    color: ${COLOR_WHITE};
    font-size: 60px;
    // background-color: ${COLOR_WHITE};
    // color: ${PRIMARY_COLOR};
    // border-radius: 20px;
    // font-size: 20px;
  }
  .text {
    text-align: center;
    color: ${COLOR_WHITE};
    font-size: 20px;
    padding: 30px 0 50px 0;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }
`;
export const Body6 = styled.div`
  height: 830px;
  background-color: ${COLOR_WHITE};
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: bold;
  .center3 {
    text-align: center;
    padding: 50px 0 0 0;
  }
`;
// height 원래 650px;
