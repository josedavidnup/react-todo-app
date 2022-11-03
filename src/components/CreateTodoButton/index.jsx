import React from 'react';
import './CreateTodoButton.css';
function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
    // setOpenModal(openModal === true ? false : true);
  };

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
