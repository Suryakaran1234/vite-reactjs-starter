import { useState } from 'react';
import logo from 'logo.svg';
import 'App.css';
import Sample from 'Components/Sample';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <img src={logo} alt='Logo' className='App-logo' />
      <h1>I cannot believe it's working finally!!</h1>
      <Sample />
      <div>
        <button onClick={() => setCount(count + 1)} className='button'>
          🔴 Count : {count}
        </button>
      </div>
    </div>
  );
}

export default App;
