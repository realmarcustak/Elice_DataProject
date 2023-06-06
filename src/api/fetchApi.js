import { api } from "./api";

export async function fetchFire() {
  try {
    const { data } = await api.get("/fire");
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}

export async function fetchRain() {
  try {
    const { data } = await api.get(`/rain`);
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}

export async function fetchShelter(guNm) {
  try {
    let path = "/shelter";
    if (typeof guNm === "string") path += guNm;

    const { data } = await api.get(path);
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}

// 게시판 글 조회
export async function fetchPost(postId) {
  try {
    let path = "/post";
    if (typeof postId === "string") path += postId;

    const { data } = await api.get(path);
    return data;
  } catch (err) {
    console.log("error", err);
  }
}

// 게시글 작성
export async function createPost(userNm, password, title, content) {
  try {
    const { data } = api.post("/post", {
      userNm,
      password,
      title,
      content,
    });
    return data;
  } catch (err) {
    console.log("error", err);
  }
}

// 게시글 수정
export async function updatePost(userNm, password, title, content) {
  try {
    const { data } = api.put("/post", {
      userNm,
      password,
      title,
      content,
    });
    return data;
  } catch (err) {
    console.log("error", err);
  }
}

// 게시글 삭제
export async function deletePost(postId) {
  try {
    await api.delete(`/post/${postId}`);
    return null;
  } catch (err) {
    console.log("error", err);
  }
}
