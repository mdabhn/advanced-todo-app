import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";
import Input from "./components/Input";
import Todo from "./components/SingleTodo";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo);

  return (
    <div className="flex h- flex-col">
      <Input />
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo {...todo} />
        </div>
      ))}
    </div>
  );
};

export default App;
