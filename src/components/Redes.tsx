import { Container } from 'react-bootstrap';
import './Redes.css';

const linkedinIcon = 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg';
const githubIcon  = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';

const Redes = () => (
  <section id="social">
    <h2>Mis redes</h2>
    <Container className="social-links-container">
      <a
        href="https://www.linkedin.com/in/felipedurini"
        target="_blank"
        rel="noopener noreferrer"
        className="social-card"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a
        href="https://github.com/felipedurini"
        target="_blank"
        rel="noopener noreferrer"
        className="social-card"
      >
        <img src={githubIcon} alt="GitHub" className="social-icon" />
      </a>
    </Container>
  </section>
);

export default Redes;
