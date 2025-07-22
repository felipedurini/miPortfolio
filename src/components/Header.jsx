import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">MiPortfolio</div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#social" className="nav-link" onClick={() => setMenuOpen(false)}>Redes</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
