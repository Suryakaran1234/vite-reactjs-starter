import { useState } from 'react';
import logo from 'logo.svg';
import 'App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>I cannot believe it's working finally!!</h1>
      <Sample />
    </div>
  );
}

export default App;
