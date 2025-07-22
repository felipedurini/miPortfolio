import './Header.css';

const Header = () => (
  <header className="main-header">
    <div className="header-container">
      <div className="logo">MiPortfolio</div>
      <nav className="nav-links">
        <a href="#about" className="nav-link">Sobre mí</a>
        <a href="#social" className="nav-link">Redes</a>
        <a href="#projects" className="nav-link">Proyectos</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </nav>
    </div>
  </header>
);

export default Header;
