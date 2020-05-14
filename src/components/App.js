import React, { useReducer } from "react";
import "../App.css";
import TodoContext from "../contexts/TodoContext";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import reducer from "../reducers/todos";

function App() {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider>
      <div className="container">
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
