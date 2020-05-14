import { PURGE, ADD_TODO, DELETE_TODO, CHECK_TODO } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    /**
     * チェック済み削除
     */
    case PURGE:
      if (!window.confirm("全て削除します。よろしいですか？")) {
        return state;
      }

      const filteredTodos = state.todos.filter((todo) => {
        return !todo.isDone;
      });

      return {
        todos: filteredTodos,
      };

    /**
     * 追加
     */
    case ADD_TODO:
      if (!action.input) {
        return state;
      }

      const newTodo = {
        id:
          new Date().getTime().toString(36) + "-" + Math.random().toString(36),
        title: action.input,
        isDone: false,
      };

      const todos = state.todos.slice();
      todos.push(newTodo);
      return {
        todos: todos,
      };

    /**
     * 削除
     */
    case DELETE_TODO:
      if (
        !window.confirm(`「${action.title}」を削除します。よろしいですか？`)
      ) {
        return state;
      }

      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.id;
      });

      return {
        todos: newTodos,
      };

    /**
     * チェックボックス
     */
    case CHECK_TODO:
      const target = state.todos.filter((todo) => {
        return todo.id === action.id;
      })[0];

      target.isDone = !action.isDone;

      return {
        todos: state.todos,
      };

    default:
      return state;
  }
};
