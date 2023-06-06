import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './UpdatePost.style';

export const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userNm, setUserNm] = useState('');
  const [password, setPassword] = useState('');
  const [createPost, setCreatePost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/post').then((response) => {
      setCreatePost(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/post', { title, content, userNm, password })
      .then(() => {
        setTitle('');
        setContent('');
        setUserNm('');
        setPassword('');
      })
      .catch(() => {
        console.log(title);
      });
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
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>내용:</label>
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <label>사용자명:</label>
          <br />
          <input
            type='text'
            value={userNm}
            onChange={(e) => setUserNm(e.target.value)}
          />
          <br />
          <label>비밀번호:</label>
          <br />
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>작성</button>
        </form>
      </S.FormContainer>
      {/* 아래 코드 작성시 데이터 실시간으로 확인 가능,,,왜인지는 모르겠어요,,,,^^,,, */}
      {/* <div>
      {createPost.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.userNm}</p>
          <p>{post.password}</p>
        </div>
      ))}
    </div> */}
    </S.Container>
  );
};
