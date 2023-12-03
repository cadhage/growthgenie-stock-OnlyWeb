import LogoImage from "../assets/clair-logo-white.svg";

const Header = ({ handleClientLogin, handleAdminLogin, userType }) => {
  console.log(userType);
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={LogoImage} alt="Logo" width="100" height="50" />
        </div>
        <nav className="header-nav">
          <ul className="header-menu-left">
            <li>
              <a href="/" className="header-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="header-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="header-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="login-buttons">
          {
            <>
              <button className="admin-login" onClick={handleClientLogin}>
                Client Login
              </button>
              <button className="admin-login" onClick={handleAdminLogin}>
                Admin Login
              </button>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
