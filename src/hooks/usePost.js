import { useState, useEffect } from "react";
import { fetchPost } from "../api";

export function usePost(postId) {
  const [post, setPost] = useState([]);

  async function _fetchPost(postId) {
    try {
      const post = await fetchPost(postId);
      setPost(post);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    _fetchPost(postId);
  }, [postId]);

  return { post };
}
