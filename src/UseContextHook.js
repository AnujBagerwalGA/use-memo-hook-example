import React, { useContext } from 'react';
import Display from './Display';

const NumberContext = React.createContext();
const UseContextHook = () => {
  return (
    <div>
      <NumberContext.Provider value={34}>
        <Display />
      </NumberContext.Provider>
    </div>
  );
};

export { NumberContext };
export default UseContextHook;
