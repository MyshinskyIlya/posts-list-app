import React from "react";
import { MyButton } from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
export const Postitem = (props) => {
  const router = useNavigate();

  const handleClick = (num) => {
    router(`/posts/${num}`);
  };

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => handleClick(props.post.id)}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
