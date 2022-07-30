import { useState } from "react";

function TodoForm({ todos, setTodos, todo }) {

  const [textInput, setTextInput] = useState("");

  const textInputHandle = (e) => {
    setTextInput(e.target.value);
  };

  const submitTodoHandle = (e) => {
    e.preventDefault();
    if (textInput === "") {
      alert("Write Something To Do?");
      return false;
    } else {
      setTodos([
        ...todos,
        { text: textInput, completed: false, id: Math.random() * 1000 }
      ]);
    }

    setTextInput("");
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>

        <form>
          <input
            className="new-todo"
            value={textInput}
            placeholder="What needs to be done?"
            autoFocus
            onChange={textInputHandle}
          />
          <button onClick={submitTodoHandle}></button>
        </form>
      </header>
    </div>
  );
}

export default TodoForm;
