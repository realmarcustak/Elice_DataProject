import { Post } from "../../components";

const PostListPage = (props) => {
  return (
    <>
      <Post />
    </>
  );
};

export default PostListPage;

// import React, { useState } from "react";
// import { usePost } from "../../hooks";

// import * as S from "./PostList.style";

// function Article(props) {
//   return (
//     <S.ArticlePart>
//       <article>
//         <h2 className="title">{props.title}</h2>
//         <div className="body">{props.body}</div>
//       </article>
//     </S.ArticlePart>
//   );
// }

// function Header(props) {
//   return (
//     <S.HeaderPart>
//       <header>
//         <h1>
//           <a
//             className="title"
//             href="/"
//             onClick={(event) => {
//               event.preventDefault();
//               props.onChangeMode();
//             }}
//           >
//             {props.title}
//           </a>
//         </h1>
//       </header>
//     </S.HeaderPart>
//   );
// }

// function Nav(props) {
//   const lis = [];
//   for (let i = 0; i < props.topics.length; i++) {
//     const t = props.topics[i];
//     lis.push(
//       <li key={t.postId}>
//         <a
//           className="lists"
//           id={t.postId}
//           href={"/read/" + t.id}
//           onClick={(event) => {
//             event.preventDefault();
//             props.onChangeMode(Number(event.target.id));
//           }}
//         >
//           {t.title}
//         </a>
//       </li>
//     );
//   }
//   return (
//     <S.List>
//       <nav>
//         <ol>{lis}</ol>
//       </nav>
//     </S.List>
//   );
// }

// function Create(props) {
//   return (
//     <S.CreatePage>
//       <article>
//         <h2>새 글 작성 페이지 입니다.</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const title = event.target.title.value;
//             const body = event.target.body.value;
//             props.onCreate(title, body);
//           }}
//         >
//           <p>
//             <input type="text" name="title" placeholder="제목을 입력하세요" />
//           </p>
//           <p>
//             <textarea name="body" placeholder="내용을 입력하세요"></textarea>
//           </p>
//           <p>
//             <input type="submit" value="저장하기"></input>
//           </p>
//         </form>
//       </article>
//     </S.CreatePage>
//   );
// }

// function Update(props) {
//   const [title, setTitle] = useState(props.title);
//   const [body, setBody] = useState(props.content);

//   return (
//     <S.Updating>
//       <article>
//         <h2>지금 수정 중 입니다!</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const title = event.target.title.value;
//             const body = event.target.body.value;
//             props.onUpdate(title, body);
//           }}
//         >
//           <p>
//             <input
//               className="title"
//               type="text"
//               name="title"
//               placeholder="title"
//               value={title}
//               onChange={(event) => {
//                 setTitle(event.target.value);
//               }}
//             />
//           </p>
//           <p>
//             <textarea
//               className="body"
//               name="body"
//               placeholder="body"
//               value={body}
//               onChange={(event) => {
//                 setBody(event.target.value);
//               }}
//             ></textarea>
//           </p>
//           <p>
//             <input type="submit" value="수정 완료"></input>
//           </p>
//         </form>
//       </article>
//     </S.Updating>
//   );
// }

// function App() {
//   const [mode, setMode] = useState("WELCOME");
//   const [id, setId] = useState(null);
//   const [nextId, setNextId] = useState(4);

//   const { post } = usePost();

//   let content = null;
//   let contextControl = null;

//   // 처음 페이지를 들어왔을 때
//   if (mode === "WELCOME") {
//     content = (
//       <Article
//         title="반딧불 이야기 게시판 입니다"
//         body="새 글을 작성해 소통해 보세요!"
//       ></Article>
//     );

//     // 글을 클릭하면 해당 글 보여줌
//   } else if (mode === "READ") {
//     let title,
//       body = null;
//     for (let i = 0; i < post.length; i++) {
//       if (post[i].postId === id) {
//         title = post[i].title;
//         body = post[i].content;
//       }
//     }

//     content = <Article title={title} body={body}></Article>;
//     contextControl = (
//       <>
//         <a
//           className="button1"
//           href={"/update/" + id}
//           onClick={(event) => {
//             event.preventDefault();
//             setMode("UPDATE");
//           }}
//         >
//           글 수정하기
//         </a>
//         <input
//           className="button2"
//           type="button"
//           value="글 삭제하기"
//           onClick={() => {
//             alert("삭제 하시겠습니까?");
//             const newTopics = [];
//             for (let i = 0; i < post.length; i++) {
//               if (post[i].id !== id) {
//                 newTopics.push(post[i]);
//               }
//             }
//             // setTopics(newTopics);
//             setMode("WELCOME");
//           }}
//         />
//       </>
//     );
//   } else if (mode === "CREATE") {
//     content = (
//       <Create
//         onCreate={(_title, _body) => {
//           const newTopic = { id: nextId, title: _title, body: _body };
//           const newTopics = [...post];
//           newTopics.push(newTopic);
//           // setTopics(newTopics);
//           setMode("READ");
//           setId(nextId);
//           setNextId(nextId + 1);
//         }}
//       ></Create>
//     );
//   } else if (mode === "UPDATE") {
//     let title,
//       body = null;
//     for (let i = 0; i < post.length; i++) {
//       if (post[i].id === id) {
//         title = post[i].title;
//         body = post[i].body;
//       }
//     }
//     content = (
//       <Update
//         title={title}
//         body={body}
//         onUpdate={(title, body) => {
//           console.log(title, body);
//           const newTopics = [...post];
//           const updatedTopic = { id: id, title: title, body: body };
//           for (let i = 0; i < newTopics.length; i++) {
//             if (newTopics[i].id === id) {
//               newTopics[i] = updatedTopic;
//               break;
//             }
//           }
//           // setTopics(newTopics);
//           setMode("READ");
//         }}
//       ></Update>
//     );
//   }
//   return (
//     <S.FullBody>
//       <S.ListPart>
//         <Header
//           className="title"
//           title="게시판"
//           onChangeMode={() => {
//             setMode("WELCOME");
//           }}
//         ></Header>
//         <Nav
//           className="nav"
//           topics={post}
//           onChangeMode={(_id) => {
//             setMode("READ");
//             setId(_id);
//           }}
//         ></Nav>
//         <a
//           className="buttons"
//           href="/create"
//           onClick={(event) => {
//             event.preventDefault();
//             setMode("CREATE");
//           }}
//         >
//           글 작성하기
//         </a>
//       </S.ListPart>
//       <S.OneArticle>
//         {content}
//         <div>{contextControl}</div>
//       </S.OneArticle>
//     </S.FullBody>
//   );
// }

// export default App;
