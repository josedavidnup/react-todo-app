import React from 'react';
import { GiHand } from 'react-icons/gi';

import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <>
      <h1>
        Welcome to your ToDo App <GiHand />
      </h1>
      <h2 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
        {completedTodos} of {totalTodos} completed
      </h2>
    </>
  );
}

export { TodoCounter };
