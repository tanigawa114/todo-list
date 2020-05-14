import React from "react";

function TodoHeader() {
  return (
    <header>
      TODOリスト
      <span>(1/1)</span>
      <button onClick={() => console.log("チェック済みを削除")}>
        チェック済を削除
      </button>
    </header>
  );
}

export default TodoHeader;
