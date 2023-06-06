import { usePost } from "../../hooks";
import * as S from "./Post.style";
import { Link, useParams } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
// import { useNavigate } from "react-router-dom";
import { PostModalButton } from "./PostModalButon";

export const Post = () => {
  const { postId } = useParams();
  const { post } = usePost(postId);
  console.log(post);

  // const navigate = useNavigate();

  // const moveToProductDetail = (postId) => {
  //   navigate(`/post/${postId}`);
  // };

  return (
    <S.PostSection>
      <div className="pageName">게 시 판</div>
      <Link to={ROUTE.CREATEPOST_PAGE.link}>
        <button className="button">글 작성하기</button>
      </Link>
      <table>
        <thead className="table-head">
          <tr>
            <th>번호</th>
            <th className="postTitle">제목</th>
            <th>작성시간</th>
            <th>수정시간</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {post.map((post, index) => (
            <tr key={post.postId}>
              <td>{index + 1}</td>
              <td>
                {/* 게시글페이지로이동하기 */}
                {/* <Link 
                  className="title"
                  to={ROUTE.VIEWPOST_PAGE.link} 
                  name={post}>
                  {post.title}
                </Link> */}

                {/* 게시글 모달로 보기 */}
                <PostModalButton name={post} post={post.title} />
              </td>
              {/* TODO: 날짜 형식 바꿔서 출력 */}
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.PostSection>
  );
};
