import React, { useContext } from "react";
import { PURGE } from "../actions";
import TodoContext from "../contexts/TodoContext";

function TodoHeader() {
  const { state, dispatch } = useContext(TodoContext);

  const canDelete = state.todos.filter((todo) => todo.isDone).length === 0;

  return (
    <header>
      TODOリスト
      <button disabled={canDelete} onClick={() => dispatch({ type: PURGE })}>
        チェック済を削除
      </button>
    </header>
  );
}

export default TodoHeader;
