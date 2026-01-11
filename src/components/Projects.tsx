import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.css";

import part6 from "../images/part6.png";
import part7 from "../images/part7.png";
import part8 from "../images/part8.png";
import studyCover from "../images/study-cover.png";
import portfolioAdrian from "../images/portfolioAdrian.jpg";

const projectData = [
  {
    id: 2,
    titulo: "Parte 7 Fullstack Open",
    descripcion:
      "React router, custom hooks, estilando la aplicación con CSS y webpack. usuario: felipe, contraseña: salainen",
    link: "https://blogapp-o471.onrender.com",
    image: part7,
  },
  {
    id: 1,
    titulo: "Parte 6 Fullstack Open",
    descripcion:
      "Gestión avanzada del estado. (Solo disponible para ver en github)",
    link: "https://github.com/felipedurini/Part6-fullstack",
    image: part6,
  },
  {
    id: 3,
    titulo: "Portfolio de Adrián",
    descripcion:
      "Sitio personal de un cliente, con proyectos destacados y contacto.",
    link: "https://portfolioadrianh.netlify.app/",
    image: portfolioAdrian,
  },
];
const Projects = () => {
  return (
    <>
      <div id="projects" style={{ position: "relative", top: "-90px" }} />

      <div className="projects-wrapper" style={{ position: "relative" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Mis Proyectos
        </h2>

        {/* Proyecto destacado */}
        <div className="featured-project">
          <a
            href="https://studyingapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-link"
          >
            <img src={studyCover} alt="Study App" className="featured-image" />
          </a>
          <h3 className="featured-title">Study App</h3>
          <p className="featured-desc">
            Aplicación full-stack para organizar el estudio con notas, resúmenes
            automáticos y seguimiento de progreso. Frontend en React y backend
            con autenticación y persistencia.
          </p>
        </div>

        {/* Swiper de proyectos */}
        <Swiper
          centeredSlides={true}
          slideToClickedSlide={true}
          className="mySwiper"
          effect="coverflow"
          grabCursor={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView="auto"
        >
          {projectData.map((project) => (
            <SwiperSlide key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="swiper-slide-link"
              >
                <img alt={project.titulo} src={project.image} />
              </a>
              <p className="project-desc">{project.descripcion}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
