import React from "react";
import "./TodoList.css";

function TodoList(props) {
  // const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && new Array(5).fill().map((todo) => props.onLoading())}

      {!props.loading &&
        !props.totalTodos &&
        props.onEmptyTodos(props.searchValue)}

      {props.totalTodos &&
        !props.searchedTodos?.length &&
        props.onEmptySearchResults(props.searchValue)}

      {props.searchedTodos?.map(props.render)}

      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
