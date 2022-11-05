import { useState } from "react";

import { AppUI } from "./AppUI";

// const todos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "aprender a bailar", completed: false },
//   { text: "aprender a programar", completed: true },
//   { text: "aprender a cocinar", completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = useState("");
  const [TodoLis, setTodoList] = useState(parsedTodos);
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

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveTodos = (newTodos) => {
    // Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
    // Los guardamos en el localStorage
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    // Actualizamos nuestro estado
    setTodoList(newTodos);
  };

  // funcion para completar un todo
  const completeTodo = (text) => {
    const todoIndex = TodoLis.findIndex((todo) => todo.text === text);
    const newTodos = [...TodoLis];
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    saveTodos(newTodos);
  };

  // funcion para eliminar un todo
  const deleteTodo = (text) => {
    const todoIndex = TodoLis.findIndex((todo) => todo.text === text);
    const newTodos = [...TodoLis];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  //

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export { App };
