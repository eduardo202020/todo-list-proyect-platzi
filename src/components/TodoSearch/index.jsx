import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
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
