import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = params.id;

  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.state ? location.state.todo : null) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edita tu TODO"
      text={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
