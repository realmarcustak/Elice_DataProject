// import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./ViewPost.style";
// import { usePost } from "../../hooks";
// import { Link } from "react-router-dom";
// import { ROUTE } from "../../routes/Route";
// import { UpdatePost } from "../updatepost";
import { useParams } from "react-router-dom";

export const ViewPost = (name) => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [userNm, setUserNm] = useState("");
  // const [password, setPassword] = useState("");
  let { id } = useParams();
  console.log(name);
  return (
    <S.Container>
      <h1>
        게시글 제목
        {name.title}
        <br />
      </h1>
      <S.FormContainer>
        <form>
          게시글 내용
          {name.content}
        </form>
        {/* <Link to={ROUTE.UPDATEPOST_PAGE.link} className="modify">
          수정
        </Link> */}
        <button type="delete">삭제</button>
      </S.FormContainer>
    </S.Container>
  );
};
