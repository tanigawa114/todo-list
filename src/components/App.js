import React, { useEffect, useReducer } from "react";
import "../App.css";
import TodoContext from "../contexts/TodoContext";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import reducer from "../reducers/todos";

const APP_KEY = "appWithHooks";

function App() {
  /**
   * 初期化
   */
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        todos: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * 永続化
   */
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
