import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <nav className="left">
          <CiMenuBurger className="mobile" />
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <ul>
            <Link to="">
              <li>Collections</li>
            </Link>
            <Link to="">
              <li>Men</li>
            </Link>
            <Link to="">
              <li>Women</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="">
              <li>Contact</li>
            </Link>
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
