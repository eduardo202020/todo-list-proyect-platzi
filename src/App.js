import { useState } from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "aprender a bailar", completed: false },
  { text: "aprender a programar", completed: true },
  { text: "aprender a cocinar", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [TodoLis, setTodoList] = useState(todos);
  const completedTodos = TodoLis.filter((todo) => !!todo.completed).length;
  const totalTodos = TodoLis.length;

  // creo un array vacio para guardar los todos que cumplan con la condicion
  let searchedTodos = [];

  // filtracion de todos por el buscador
  if (searchValue.length >= 1) {
    searchedTodos = TodoLis.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = TodoLis;
  }

  // funcion para completar un todo
  const completeTodo = (text) => {
    const todoIndex = TodoLis.findIndex((todo) => todo.text === text);
    const newTodos = [...TodoLis];
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    setTodoList(newTodos);
  };

  // funcion para eliminar un todo
  const deleteTodo = (text) => {
    const todoIndex = TodoLis.findIndex((todo) => todo.text === text);
    const newTodos = [...TodoLis];
    newTodos.splice(todoIndex, 1);
    setTodoList(newTodos);
  };
  //

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch search={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
