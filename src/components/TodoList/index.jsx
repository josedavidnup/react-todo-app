import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renFunc = props.children || props.render;
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {/* {props.searchedTodos.map(props.render)} */}
      {props.searchedTodos.map(renFunc)}

      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
