import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const modeToggler = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className={lightMode ? '' : 'dark'}>
      <Navbar lightMode={lightMode} modeToggler={modeToggler} />
      <Form />
    </div>
  );
}

export default App;
