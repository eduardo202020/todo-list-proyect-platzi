import React from "react";
import { useLocation } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const location = useLocation();
  let newText;
  if (location.state ? location.state.searchText : null) {
    // if (location.state ? location.state.searchText : null) {

    newText = location.state.searchText;
  } else {
    newText = "";
  }

  const { addTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        submitEvent={(text) => addTodo(text)}
        submitText="Agregar"
        label="Agrega tu TODO"
        text={newText}
      />
    </>
  );
}

export { NewTodoPage };
