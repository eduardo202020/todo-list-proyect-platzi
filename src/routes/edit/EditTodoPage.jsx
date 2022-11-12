import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const { stateUpdaters, state } = useTodos();
  const { id } = useParams();
  const { loading } = state;

  const { getTodo, editTodo } = stateUpdaters;
  const todo = getTodo(id);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <TodoForm
          submitEvent={(newTodoText) => editTodo(id, newTodoText)}
          submitText="Editar"
          label="Edita tu TODO"
          text={todo.text}
        />
      </>
    );
  }
}

export { EditTodoPage };
