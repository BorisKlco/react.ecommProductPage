import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CartContext from './CartContext';
import Landing from './Landing';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Collections from './Collections/Collections';
import './style.css';

const App = () => {
  const cart = useState(null);
  return (
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <Navbar />
        <Routes>
          <Route path="/collections/:id?" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};
createRoot(document.getElementById('root')).render(<App />);
