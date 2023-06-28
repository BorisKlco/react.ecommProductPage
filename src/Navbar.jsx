import './Navbar.css';
import { CiMenuBurger } from 'react-icons/ci';

function Navbar() {
  return (
    <>
      <header>
        <nav className="left">
          <CiMenuBurger className="mobile" />
          <img src="/images/logo.svg" alt="logo" />
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="right">
          <img className="cart" src="/images/icon-cart.svg" alt="cart" />
          <img
            className="profileImg"
            src="/images/image-avatar.png"
            alt="profile"
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
