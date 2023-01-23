import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todos";

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const createTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: new Date().toISOString(),
        title: todo,
        completed: false,
      })
    );
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="name"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Input;
