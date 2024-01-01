import { useState } from 'react';
import './App.css';
import Swatch from './components/Swatch';

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <div className='App'>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render App
      </button>
      <Swatch color={'red'} />
    </div>
  );
}

export default App;
