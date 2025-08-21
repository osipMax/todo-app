import React, { PropsWithChildren } from "react";
import { Todo } from "../App";
import { ListReducerAction, ListReducerActions } from "../reducers/listReducer.ts";

type TodoItemProps = {
  todo: Todo;
  dispatch: React.Dispatch<ListReducerAction>;
};

export const TodoItem: React.FC<TodoItemProps & PropsWithChildren> = ({
  todo,
  dispatch,
  children
}) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() =>
          dispatch({
            type: ListReducerActions.TOGGLE_ITEM,
            payload: { id: todo.id }
          })
        }
        className="todo-checkbox"
      />
      <div className="todo-text">{todo.text}</div>
      {children}
    </div>
  );
};
