import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Helper to show temporary message
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 4000);
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    showMessage("✅ Task added successfully");
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    showMessage("✅ Task marked as completed");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showMessage("🗑️ Task removed successfully");
  };

  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
    setTodos(sorted);
    showMessage("✅ Tasks sorted successfully");
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>React To-Do List</h1>

      {/* Show success message */}
      {message && <div className="message">{message}</div>}

      <TodoForm addTodo={addTodo} />

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={sortTodos}>Sort</button>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
