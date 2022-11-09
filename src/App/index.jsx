import React from "react";
import { useTodos } from "./useTodos";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { LoadingTodo } from "../components/LoadingTodo";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoHeader } from "../components/TodoHeader";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    addTodo,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {/* {loading && <p>Estamos cargando, no desesperes...</p>} */}
        {loading &&
          new Array(5)
            .fill(10)
            .map((item, index) => <LoadingTodo key={index} />)}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { App };
