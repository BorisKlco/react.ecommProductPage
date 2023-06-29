import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CartContext from './CartContext';
import Landing from './Landing';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Collections from './Collections/Collections';
import './style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const cart = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartContext.Provider value={cart}>
          <Navbar />
          <Routes>
            <Route path="/collections/:id?" element={<Collections />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </CartContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
createRoot(document.getElementById('root')).render(<App />);
