import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  // const onClickButton = () => {
  //   // setOpenModal((prevState) => !prevState);
  // };
  return (
    <>
      {/* <button className="CreateTodoButton" onClick={onClickButton}> */}
      <button className="CreateTodoButton" onClick={props.onClick}>
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
