import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={() => onClickButton(props.text)}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
