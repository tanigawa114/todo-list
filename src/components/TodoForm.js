import React from "react";

function TodoForm() {
  return (
    <form onSubmit={console.log("submit")}>
      <input
        type="text"
        value="たまねぎ"
        onChange={() => console.log("todo")}
      />
      <input type="submit" value="追加" />
    </form>
  );
}

export default TodoForm;
