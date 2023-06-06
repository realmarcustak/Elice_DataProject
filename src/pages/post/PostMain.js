import React from "react";
import PostList from "./PostList";
import { withRouter } from "react-router-dom";

// TODO: 삭제
const PostMain = (props) => {
  return (
    <>
      <h2 align="center">반딧불 이야기</h2>
      <PostList />
    </>
  );
};

export default PostMain;
