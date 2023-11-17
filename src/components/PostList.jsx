import React from "react";
import { useState } from "react";
import { Postitem } from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PostList = ({ posts, title, remove, isPostLoading }) => {
  if (!posts.length && isPostLoading == false) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены !</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames={"post"}>
            <Postitem remove={remove} post={post} number={index + 1}></Postitem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
