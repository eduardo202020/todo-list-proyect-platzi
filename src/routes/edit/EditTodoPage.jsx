import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const { stateUpdaters } = useTodos();
  const { id } = useParams();
  console.log(id);

  const { editTodo } = stateUpdaters;
  return (
    <>
      <h1>editar todo</h1>
      <TodoForm
        submitEvent={(newTodoText) => editTodo(id, newTodoText)}
        submitText="Editar"
        label="Edita tu TODO"
      />
    </>
  );
}

export { EditTodoPage };
