import './style/App.scss';
import { Message } from "./components/Message"
import { useState } from 'react';

function App() {

  let [count, setCount] = useState(0);

  function clickButton() {
    return setCount(++count)
  }

  return (
    <div className="app">
      <Message isCount={count} isClickButton={clickButton} />
    </div>
  );
}

export default App;
