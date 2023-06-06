import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const ModalSection = styled.div`
  // 모달 창 크기
  width: 500px;
  height: 500px;
  z-index: 999; // 모달 창 최상단으로 보이게 하는 코드

  // 모달 창 중앙 배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달 창 디자인
  border-radius: 10px;
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
  box-shadow: 0px 0px 20px #000;
  padding: 20px;
  // display: flex;
  // flex-direction: column;

  .close {
    // 닫기 버튼 우상단 배치
    position: absolute;
    color: ${PRIMARY_COLOR};
    top: 1.5%;
    right: 3%;
    // 닫기 버튼 디자인
    border-color: transparent;
    background-color: transparent;
  }
  .close:hover{
    color: orange;
  }

  .buttonWrapper {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .Pbutton {
    width: 80px;
    padding: 7px 5px;
    margin: 5px 10px 5px 5px;
    font-weight: bold;
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    border-radius: 20px;
    border: none;
  }

  .Pbutton:hover {
    background-color: orange;
  }
`;

export const ModalTitle = styled.div`
  // text-align: center;
  justify-content: left;
  font-size: 30px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  font-size: 20px;

  //'제목,작성자,내용'이라는 제목
  .titles{
    padding-top:10px;
    font-weight: bold;
    font-size: 30px;
    margin-top: 20px;
  }
  //사용자가 쓴 부분
  .texts {
    padding-top:10px;
    background: white;
    height: 40px;
    border-radius: 20px;
  }
  .textsC {
    padding-top:10px;
    height: 80px;
    background: white;
    border-radius: 20px;
  }
`;
