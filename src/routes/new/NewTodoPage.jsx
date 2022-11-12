import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { stateUpdaters } = useTodos();

  //   const { addTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        submitEvent={() => console.log("este debera agregar un todo")}
        submitText="Agregar"
        label="Agrega tu TODO"
        // setOpenModal={setOpenModal}
      />
    </>
  );
}

export { NewTodoPage };
