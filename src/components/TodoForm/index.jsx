import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new ToDo</label>
      <textarea
        autoFocus
        value={newTodoValue}
        onChange={onChange}
        placeholder='Write your new Task'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
          //   disabled={!newTodoValue}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
