import { useState } from 'react';
import './App.css';
import Swatch from './components/Swatch';
import MemoedSwatch from './components/MemoedSwatch';

function App() {
  const [color, setColor] = useState('red');
  const [appRenderIndex, setAppRenderIndex] = useState(0);

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <div className='App'>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render App
      </button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change color
      </button>
      {/* <Swatch color={'red'} /> */}
      <MemoedSwatch color={color} />
    </div>
  );
}

export default App;
