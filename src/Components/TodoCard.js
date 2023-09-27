import React from 'react';

function TodoCard({ todo, completeTodo}) {
  const handleCardClick = () => {
    completeTodo(todo.id);
  };

  return (
    <div
      className={`todo-card ${todo.completed ? 'completed' : ''}`}
      onClick={handleCardClick}
    >
      {todo.text}
    </div>
  );
}

export default TodoCard;
