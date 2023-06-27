import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';
import './style.css';

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Hi</h1>
    </>
  );
};
createRoot(document.getElementById('root')).render(<App />);
