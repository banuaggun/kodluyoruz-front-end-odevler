import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import TodoFooter from "./components/todoFooter/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="todoapp">
      <TodoForm todos={todos} setTodos={setTodos} todo={todos.todo} />

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoList
            status={status}
            key={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>

      <TodoFooter
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
