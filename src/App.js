import React from 'react';

const ExampleComponent = (props) => {
  const {
    text,
  } = props;

  return (
    <div>
      Example Component:
      {' '}
      {text}
    </div>
  );
};
export default ExampleComponent;
