import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");

  // uso del navegate
  const navigate = useNavigate();

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    // setOpenModal(false);
    navigate("/");
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    props.submitEvent(newTodoValue);
    // Cerramos nustro modal
    // setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    // setNewTodoValue("");
    // Redireccionamos a la página de inicio
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        autoFocus
        value={newTodoValue}
        onChange={onChange}
        placeholder="Type a todo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
