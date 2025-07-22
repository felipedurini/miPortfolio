import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';
import part6 from '../images/part6.png';
import part7 from '../images/part7.png';
import part8 from '../images/part8.png';
import portfolioAdrian from '../images/portfolioAdrian.jpg';

const projectData = [
  {
    id: 1,
    titulo: "Parte 6 Fullstack Open",
    descripcion: "Gestión avanzada del estado. (Solo disponible para ver en github)",
    link: "https://github.com/felipedurini/Part6-fullstack",
    image: part6
  },
  {
    id: 2,
    titulo: "Parte 7 Fullstack Open",
    descripcion: "React router, custom hooks, estilando la aplicación con CSS y webpack. usuario: felipe, contraseña: salainen",
    link: "https://blogapp-3pmf.onrender.com/",
    image: part7
  },
  {
    id: 3,
    titulo: "Parte 8 Fullstack Open",
    descripcion: "Frontend creado usando React, backend manejado GraphQL y Apollo.",
    link: "https://library-fjg4.onrender.com/",
    image: part8
  },
  {
    id: 4,
    titulo: "Portfolio de Adrián",
    descripcion: "Sitio personal de un cliente, con proyectos destacados y contacto.",
    link: "https://github.com/felipedurini/portfolio-adrian",
    image: portfolioAdrian
  }
];

const Projects = () => (
  <section id="projects">
    <h2>Mis proyectos</h2>
    <Container className="projects-container">
      <Row>
        {projectData.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3} className="mb-4">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <Card className="project-card">
                  <Card.Img variant="top" src={item.image} alt={item.titulo} />
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            ) : (
              <Card className="project-card">
                <Card.Img variant="top" src={item.image} alt={item.titulo} />
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <Card.Text>{item.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
