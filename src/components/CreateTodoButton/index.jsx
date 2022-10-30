import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext/index';
function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
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
