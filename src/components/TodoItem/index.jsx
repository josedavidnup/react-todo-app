import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <AiFillCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className='Icon Icon-delete' onClick={props.onDelete}>
        <AiFillDelete />
      </span>
    </li>
  );
}

export { TodoItem };
