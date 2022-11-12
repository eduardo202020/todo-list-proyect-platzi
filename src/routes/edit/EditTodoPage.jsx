import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const { stateUpdaters } = useTodos();

  //   const { addTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        submitEvent={() => console.log("este debera editar un todo")}
        submitText="Editar"
        label="Edita tu TODO"
      />
    </>
  );
}

export { EditTodoPage };
