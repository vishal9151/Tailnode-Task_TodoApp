import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, completeTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
