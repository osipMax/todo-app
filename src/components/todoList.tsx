import React, { useState } from "react";
import { Todo } from "../App";
import { ListReducerAction, ListReducerActions } from "../reducers/listReducer";
import { TodoForm } from "./todoForm";
import { TodoItem } from "./todo";

type TodoListProps = {
  todos: Todo[];
  dispatch: React.Dispatch<ListReducerAction>;
};

export const TodoList = ({ todos, dispatch }: TodoListProps) => {
  const [selectedItem, setSelectedItem] = useState<Todo | null>(null);

  return (
    <>
      {selectedItem && (
        <TodoForm
          defaultValue={selectedItem.text}
          action={(text) => {
            dispatch({
              type: ListReducerActions.UPDATE_ITEM,
              payload: { id: selectedItem.id, text }
            });
            setSelectedItem(null);
          }}
          actionName="Save todo"
        />
      )}

      {!selectedItem && (
        <TodoForm
          defaultValue={""}
          action={(text) =>
            dispatch({ type: ListReducerActions.ADD_ITEM, payload: { text } })
          }
          actionName="Add todo"
        />
      )}

      <ul className="todoList">
        {todos.map((item, i) => (
          <li key={i}>
            <TodoItem todo={item} dispatch={dispatch}>
              <div className="todo-actions">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                  disabled={!!selectedItem}
                >
                  &#9998;
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: ListReducerActions.DELETE_ITEM,
                      payload: { id: item.id }
                    })
                  }
                  disabled={!!selectedItem}
                >
                  &#10799;
                </button>
              </div>
            </TodoItem>
          </li>
        ))}
      </ul>
    </>
  );
};
