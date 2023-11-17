import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loader/Loader";

export const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  // _____________________________________________

  const [getPostById2, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  // ______________________________________________

  async function getPostById(id) {
    const response = await PostService.getById(id);

    setPost(response.data);
  }

  useEffect(() => {
    getPostById2();
    fetchComments();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Пост {params.id}</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div style={{ textAlign: "center" }}>
          {post.id}. {post.title}
        </div>
      )}
      <h3 style={{ textAlign: "center", marginTop: 30 }}>Комментарии</h3>
      {isComLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {comments.map((e) => (
            <div key={e.id} style={{ marginTop: 15 }}>
              <h5>{e.email}</h5>
              <div>{e.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
