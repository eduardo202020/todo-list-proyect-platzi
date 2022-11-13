import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue, loading, searchedText }) {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      navigate(`/?search=${event.target.value}`);
    }
  };

  useEffect(() => {
    if (searchedText) {
      setSearchValue(searchedText);
    }
  }, [searchedText]);

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
      onKeyDown={handleKeyDown}
    />
  ) : (
    <input
      autoFocus
      className="TodoSearch"
      placeholder="type a todo"
      onChange={onSearchValueChange}
      value={searchValue}
      onKeyDown={handleKeyDown}
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
