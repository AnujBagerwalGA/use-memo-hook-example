// useMemo Hook is use to not render funtion unwantedly
// https://www.youtube.com/watch?v=yM2q_joUmNQ
import './App.css';
import { useMemo, useState } from 'react';
import UseContextHook from './UseContextHook';

const App = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(20);
  const multicountMemo = useMemo(
    function Multicount() {
      console.log('Multicount function called');
      return 5 * count;
    },
    [count]
  );

  // It is call unwantedly
  // function multicountMemo() {
  //   console.log('Multicount function called');
  //   return 5 * count;
  // }
  return (
    <div className='App'>
      <h1> Count : {count}</h1>
      <h2>Item : {item}</h2>
      {/* It will render unwantedly  */}
      {/* <h2>{multicountMemo()}</h2> */}
      <h2>{multicountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Counts</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>
      <hr />
      <h2>Use Context Hook</h2>
      <UseContextHook />
    </div>
  );
};

export default App;

// memo vs useMemo hook
// https://atomizedobjects.com/blog/react/react-memo-vs-use-memo/#:~:text=memo%20is%20a%20higher%2Dorder,value%20returned%20from%20the%20function
