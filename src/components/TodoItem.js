import React from "react";

function TodoItem() {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={true}
          onChange={() => console.log("check")}
        />
        <span className="done">たまご</span>
      </label>
      <span className="cmd" onClick={() => console.log("delete")}>
        削除
      </span>
    </li>
  );
}

export default TodoItem;
