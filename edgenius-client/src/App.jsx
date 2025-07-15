import { useState } from 'react'
import './App.css'

import { initCustomCursor } from './utils/customCursor';

import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const cleanupHeader = initHeaderMenuToggle();
    const cleanupCursor = initCustomCursor();

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  return (
    <>
      <div class='page'>
        <Header/>
      </div>
      <div class='custom-cursor'></div>
    </>
  )
}

export default App
