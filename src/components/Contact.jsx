import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <h2>Contacto</h2>
    <Container className="contact-container">
      <p>
        Correo: <a href="mailto:felipeduri@gmail.com">felipeduri@gmail.com</a>
      </p>
      <p>
        Teléfono: <a href="tel:+541161882374">+54 11 6188 2374</a>
      </p>
    </Container>
  </section>
);

export default Contact;
