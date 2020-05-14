import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../contexts/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "reactstrap";

function TodoList() {
  const { state } = useContext(TodoContext);

  const todos = state.todos.map((todo, index) => {
    return <TodoItem key={index} todo={todo} />;
  });

  return (
    <ListGroup>{todos.length ? todos : <li>TODOはありません</li>}</ListGroup>
  );
}

export default TodoList;
