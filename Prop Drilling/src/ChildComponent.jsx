import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({name}) => {
  return (
    <div>
      
      <GrandChildComponent name={name} />
    </div>
  );
};

export default ChildComponent;
