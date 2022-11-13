import React from "react";
import { useTodos } from "../useTodos";

import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { LoadingTodo } from "../../ui/LoadingTodo";
// import { Modal } from "../../ui/Modal";
// import { TodoForm } from "../../ui/TodoForm";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodosError } from "../../ui/TodosError";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { ChangeAlert } from "../../ui/ChangeAlert";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  // codigo que utiliza el parametro ?search= de la url para buscar y lo pasa al input
  const mySearch = useLocation().search;
  const searchText = new URLSearchParams(mySearch).get("search");
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    // openModal,
    searchValue,
  } = state;

  const {
    // editTodo,
    // setOpenModal,
    // addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedText={searchText}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <LoadingTodo />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <>
            <p>No hay resultados para </p>
            <b style={{ color: "red" }}>"{searchText}"</b>
            <div>
              <button
                onClick={() => {
                  navigate("/new/", { state: { searchText } });
                }}
              >
                ¿agregar?
              </button>
            </div>
          </>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => {
              navigate("/edit/" + todo.id, { state: { todo } });
            }}
          />
        )}
      />

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      {/* <CreateTodoButton setOpenModal={setOpenModal} /> */}
      <CreateTodoButton onClick={() => navigate("/new")} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
