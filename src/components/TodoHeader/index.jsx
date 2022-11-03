import React from 'react';

function TodoHeader({ children, loading }) {
  // return <header>{React.cloneElement(children, { loading: loading })}</header>;
  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading })
      )}
    </header>
  );
}

export { TodoHeader };
