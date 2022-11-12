import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onClickButton = () => {
    props.onDelete();
  };
  const onEditButton = () => {
    props.onEdit();
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        role="img"
        className="Icon Icon-edit"
        aria-label=""
        onClick={onEditButton}
      >
        ✍️
      </span>
      <span className="Icon Icon-delete" onClick={onClickButton}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
