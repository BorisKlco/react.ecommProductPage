import './Navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <div className="left">
          <img src="/images/logo.svg" alt="logo" />
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <img className="card" src="/images/icon-cart.svg" alt="cart" />
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
