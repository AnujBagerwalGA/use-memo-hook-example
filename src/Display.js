import React, { useContext } from 'react';
import { NumberContext } from './UseContextHook';
const Display = () => {
  const number = useContext(NumberContext);
  return <div>Score is : {number}</div>;
};

export default Display;
