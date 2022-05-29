import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const modeToggler = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className={lightMode ? '' : 'dark'}>
      <Navbar lightMode={lightMode} modeToggler={modeToggler} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
