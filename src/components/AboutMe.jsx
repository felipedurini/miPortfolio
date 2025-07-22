import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.css';
import miFoto from '../images/miFoto.png';

const AboutMe = () => (
    <section id="about">
        <h2>Sobre mí</h2>
        <Container className="about-container">
            <Row className="align-items-center">
                <Col xs={12} md={4} className="mb-4 mb-md-0">
                    <Image
                        src={miFoto}
                        alt="Tu foto"
                        roundedCircle
                        className="about-image"
                    />
                </Col>
                <Col xs={12} md={8}>
                    <p>
                        Soy un estudiante de Ciencias de la Computación en la Universidad de Buenos Aires y tutor de Javascript en Coderhouse. Me apasiona la programación y el desarrollo web. He trabajado en varios proyectos personales y colaborativos, utilizando tecnologías como React, Node.js y bases de datos NoSQL, como MongoDB. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutMe;
