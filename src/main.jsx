import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Item from './Item';
import About from './About';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};
createRoot(document.getElementById('root')).render(<App />);
