import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ handleClick }) => {
  console.log('ChildComponent rendered');
  return (
    <button onClick={handleClick}>Click me</button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;