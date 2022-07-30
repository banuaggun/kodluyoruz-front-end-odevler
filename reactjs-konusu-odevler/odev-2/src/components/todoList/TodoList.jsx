import React from "react";

function TodoList({ todos, setTodos, todo }) {

  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  const deleteHandle = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="main">
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input type="checkbox" className="toggle" onClick={completeHandle} />
          <label> {todo.text} </label>
          <button className="destroy" onClick={deleteHandle}></button>
        </div>
      </li>
    </div>
  );
}

export default TodoList;
