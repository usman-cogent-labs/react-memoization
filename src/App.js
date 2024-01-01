import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Swatch from './components/Swatch';
import MemoedSwatch from './components/MemoedSwatch';

function App() {
  const [color, setColor] = useState('red');
  const [appRenderIndex, setAppRenderIndex] = useState(0);

  console.log(`App rendered ${appRenderIndex}`);

  const memoedParams = useMemo(() => ({ color }), [color]);

  const handleSwatchClick = useCallback(() => {
    console.log('swatch clicked');
  }, []);

  return (
    <div className='App'>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render App
      </button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change color
      </button>
      {/* <Swatch color={'red'} /> */}
      <MemoedSwatch params={memoedParams} onClick={handleSwatchClick} />
    </div>
  );
}

export default App;
