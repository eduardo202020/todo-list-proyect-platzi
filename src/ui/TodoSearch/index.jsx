import React from "react";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return loading ? (
    <input
      disabled={loading}
      // autoFocus
      className="TodoSearch"
      placeholder="cargando ..."
      onChange={onSearchValueChange}
      value={searchValue}
    />
  ) : (
    <input
      autoFocus
      className="TodoSearch"
      placeholder="type a todo"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );

  // <input
  //   disabled={loading}
  //   autoFocus={loading}
  //   className="TodoSearch"
  //   placeholder="Type a todo"
  //   onChange={onSearchValueChange}
  //   value={searchValue}
  // />
}

export { TodoSearch };
