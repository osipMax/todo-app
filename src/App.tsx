import React, { useReducer } from "react";
import { TodoList } from "./components/todoList";
import { listReducer } from "./reducers/listReducer";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

const initialList: Todo[] = [
  { id: uuidv4(), text: "Buy milk", done: true },
  { id: uuidv4(), text: "Buy bread", done: false }
];

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export default function App() {
  const [todos, dispatchTodos] = useReducer(listReducer, initialList);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} dispatch={dispatchTodos} />
    </div>
  );
}
