import React, { useContext } from 'react';
import { GiHand } from 'react-icons/gi';
import { TodoContext } from '../../TodoContext';

import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <>
      <h1>
        Welcome to your ToDo App <GiHand />
      </h1>
      <h2 className='TodoCounter'>
        {completedTodos} of {totalTodos} completed
      </h2>
    </>
  );
}

export { TodoCounter };
