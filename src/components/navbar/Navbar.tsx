import './Navbar.less';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img width={70} src="/images/kids-arena-logo.png" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">O kútiku</a>
          </li>
          <li>
            <a href="#rental">Prenájom atrakcií</a>
          </li>
          <li>
            <a href="#gallery">Fotogaléria</a>
          </li>
          <li>
            <a href="#pricing">Cenník</a>
          </li>
          <li>
            <a className="contact-link" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
