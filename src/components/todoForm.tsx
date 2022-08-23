import React, { useState } from "react";

type TodoFormProps = {
  defaultValue: string;
  actionName: string;
  action: (text: string) => void;
};

export const TodoForm: React.FC<TodoFormProps> = ({
  defaultValue,
  action,
  actionName
}) => {
  const [todoDescription, setTodoDescription] = useState(defaultValue);

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="todo text"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="todo-form-input"
      />
      <button
        onClick={() => {
          action(todoDescription);
          setTodoDescription("");
        }}
        disabled={todoDescription.length === 0}
        className="todo-form-button"
      >
        {actionName}
      </button>
    </div>
  );
};
