import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Projects.css";

import part6 from "../images/part6.png";
import part7 from "../images/part7.png";
import studyCover from "../images/study-cover.png";
import portfolioAdrian from "../images/portfolioAdrian.jpg";

const projectData = [
  {
    id: 2,
    titulo: "Parte 7 Fullstack Open",
    descripcion:
      "React router, custom hooks, estilando la aplicacion con CSS y webpack. Usuario: felipe, contrasena: salainen.",
    link: "https://blogapp-o471.onrender.com",
    image: part7,
  },
  {
    id: 1,
    titulo: "Parte 6 Fullstack Open",
    descripcion:
      "Gestion avanzada del estado. Disponible para revision en GitHub.",
    link: "https://github.com/felipedurini/Part6-fullstack",
    image: part6,
  },
  {
    id: 3,
    titulo: "Portfolio de Adrian",
    descripcion:
      "Sitio personal de un cliente con proyectos destacados y contacto.",
    link: "https://portfolioadrianh.netlify.app/",
    image: portfolioAdrian,
  },
];

const Projects = () => {
  return (
    <section className="scroll-mt-32 space-y-8" id="projects">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-title mt-2">Proyectos destacados</h2>
        <p className="section-copy mt-3 max-w-2xl">
          Una seleccion de trabajos recientes con foco en frontend, UX y
          aplicaciones full-stack.
        </p>
      </motion.header>

      <motion.article
        className="surface-card overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.45, delay: 0.04, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <a
          className="group block overflow-hidden"
          href="https://studyingapp.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Study App"
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            src={studyCover}
          />
        </a>

        <div className="space-y-3 px-5 py-6 sm:px-8">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl">
            Study App
          </h3>
          <p className="section-copy max-w-3xl">
            Aplicacion full-stack para organizar el estudio con notas,
            resumenes automaticos y seguimiento de progreso. Frontend en React
            y backend con autenticacion y persistencia.
          </p>
        </div>
      </motion.article>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Swiper
          centeredSlides={true}
          className="mySwiper"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          effect="coverflow"
          grabCursor={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView="auto"
          spaceBetween={18}
        >
          {projectData.map((project) => (
            <SwiperSlide className="project-slide" key={project.id}>
              <motion.a
                className="project-link"
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <img
                  alt={project.titulo}
                  className="project-image"
                  src={project.image}
                />
                <div className="project-meta">
                  <h4 className="project-title">{project.titulo}</h4>
                  <p className="project-desc">{project.descripcion}</p>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;
