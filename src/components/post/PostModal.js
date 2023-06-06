import { useState } from "react";
import * as S from "./PostModal.style";

export const PostModal = ({ setModalOpen, name }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");
  const [password, setPassword] = useState("");
  const [updateState, setUpdateState] = useState(false);

  const onClose = () => {
    setModalOpen((prev) => !prev);
  };

  const onChangePost = (e) => {
    e.preventDefault();
    setUpdateState(true);
  };

  // 수정버튼 누르면 실행
  // TODO: 수정하기 버튼 누르면 모달 창 사라짐 **수정 필요**
  if (updateState) {
    <S.ModalSection>
      <input
        type="text"
        value={name.title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(...title, e.target.value)}
      />
      <textarea
        value={name.content}
        placeholder="내용을 입력해주세요"
        onChange={(e) => setContent(...content, e.target.value)}
      />
      <input
        type="text"
        value={name.userNm}
        placeholder="사용자명을 입력해주세요"
        onChange={(e) => setUserNm(...userNm, e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={name.password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </S.ModalSection>;
    return;
  }

  return (
    <S.ModalSection>
      <button className="close" onClick={onClose}>
        <h2>X</h2>
      </button>
      <S.ModalTitle>{name.shelterNm}</S.ModalTitle>

      <S.ModalBody>
        <div className="titles">제목</div>
        <div className="texts">{name.title} </div>
        <div className="titles">작성자</div>
        <div className="texts">{name.userNm}</div>
        <div className="titles">내용</div>
        <div className="textsC">{name.content} </div>
        {/* {updatePost} */}
        <div className="buttonWrapper">
          <button onClick={onChangePost} className="Pbutton">
            수정하기
          </button>
          {/* TODO: 삭제하기 누르면 비밀번호 확인 후 삭제 */}
          <button className="Pbutton">삭제하기</button>
        </div>
      </S.ModalBody>
    </S.ModalSection>
  );
};
