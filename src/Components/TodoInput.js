import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a new TODO..."
      value={inputText}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
