import { v4 as uuidv4 } from "uuid";
import { Todo } from "../App";

export enum ListReducerActions {
  ADD_ITEM = "ADD_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  TOGGLE_ITEM = "TOGGLE_ITEM"
}

export type ListReducerAction = {
  type: ListReducerActions;
  payload: Partial<Todo>;
};

export const listReducer = (state: Todo[], action: ListReducerAction) => {
  switch (action.type) {
    case ListReducerActions.ADD_ITEM:
      return [
        { id: uuidv4(), text: action.payload.text, done: false },
        ...state
      ];
    case ListReducerActions.UPDATE_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text
          };
        }
        return item;
      });
    case ListReducerActions.TOGGLE_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      });
    case ListReducerActions.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
