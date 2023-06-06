import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./CreatePost.style";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");
  const [password, setPassword] = useState("");
  const [createPost, setCreatePost] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("http://localhost:8000/post", { title, content, userNm, password })
      .then(() => {
        setTitle("");
        setContent("");
        setUserNm("");
        setPassword("");
      })
      .catch(() => {
        console.log(title);
      });
    alert("작성이 완료되었습니다!");
    navigate("/PostListPage");
  };

  return (
    <S.Container>
      <h1>
        게시판 작성
        <br />
      </h1>
      <S.FormContainer>
        <form onSubmit={handleSubmit}>
          <label>제목:</label>
          <br />
          <input
            type="text"
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>내용:</label>
          <br />
          <textarea
            value={content}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <label>사용자명:</label>
          <br />
          <input
            type="text"
            value={userNm}
            placeholder="사용자명을 입력해주세요"
            onChange={(e) => setUserNm(e.target.value)}
          />
          <br />
          <label>비밀번호:</label>
          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">작성</button>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};
