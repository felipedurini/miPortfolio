import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Contacto</h2>
    <div className="contact-container">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:felipeduri@gmail.com">felipeduri@gmail.com</a>
      </div>
      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <a href="tel:+541161882374">+54 11 6188 2374</a>
      </div>
    </div>
  </section>
);

export default Contact;
