import React from "react";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Type a todo"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };
