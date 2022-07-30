import React from "react";

function TodoFooter({ todos, setTodos, status, setStatus }) {

  const uncompleted = todos.filter((todo) => todo.completed === false);

  const completed = todos.filter((todo) => todo.completed === true);

  const clearCompleted = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const checkStyle = (e) => {
    setStatus(e.target.id);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompleted.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={checkStyle}
            href="#/"
            className={status === "all" ? "selected" : ""}
            id="all"
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={checkStyle}
            href="#/"
            className={status === "active" ? "selected" : ""}
            id="active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={checkStyle}
            href="#/"
            className={status === "completed" ? "selected" : ""}
            id="completed"
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className={completed === 0 ? "hidden" : "clear-completed"}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
export default TodoFooter;
