import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../contexts/TodoContext";

function TodoList() {
  const { state } = useContext(TodoContext);

  const todos = state.todos.map((todo, index) => {
    return <TodoItem key={index} todo={todo} />;
  });

  return <ul>{todos.length ? todos : <li>TODOはありません</li>}</ul>;
}

export default TodoList;
