import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import { ADD_TODO } from "../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  /** 入力値 */
  const [input, setInput] = useState("");

  /**
   * 追加イベント
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      input: input,
    });
    setInput("");
  };

  /**
   * 値更新イベント
   */
  const handleChangeValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <InputGroup>
        <Input type="text" value={input} onChange={handleChangeValue} />
        <InputGroupAddon addonType="prepend">
          <Button type="submit" color="primary">
            追加
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
