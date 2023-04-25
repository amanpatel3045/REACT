import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [name, setName] = useState('Aman');

  return (
    <div>
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;
