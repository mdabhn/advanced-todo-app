import React from "react";
import { Todo } from "../features/todos/todos";

const SingleTodo: React.FC<Todo> = ({ id, title, completed }) => {
  return <div>{title}</div>;
};

export default SingleTodo;
