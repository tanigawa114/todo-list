import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../actions";
import TodoContext from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  function handle() {
    dispatch({ type: CHECK_TODO, id: todo.id, isDone: todo.isDone });
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isDone} onChange={handle} />
        <span className={todo.isDone ? "done" : ""}>{todo.title}</span>
      </label>
      <span
        className="cmd"
        onClick={() =>
          dispatch({ type: DELETE_TODO, id: todo.id, title: todo.title })
        }
      >
        削除
      </span>
    </li>
  );
}

export default TodoItem;
