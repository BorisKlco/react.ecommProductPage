import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CartContext from './CartContext';
import Navbar from './Navbar';
import Item from './Item';
import About from './About';
import './style.css';

const App = () => {
  const cart = useState(null);
  return (
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Item />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};
createRoot(document.getElementById('root')).render(<App />);
