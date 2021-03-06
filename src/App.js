import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import Footer from './components/Footer';
import About from './components/pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const modeToggler = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className={lightMode ? '' : 'dark'}>
      <BrowserRouter>
        <Navbar lightMode={lightMode} modeToggler={modeToggler} />
        <Routes>
          <Route path='/Meme-Generator/' element={<Form />} />
          <Route path='/Meme-Generator/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
