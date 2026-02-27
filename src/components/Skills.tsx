import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  {
    name: "JavaScript",
    img: "https://abdulkadirozenc.netlify.app/_next/static/media/javascript.b472cbc1.svg",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "MongoDB",
    img: "https://abdulkadirozenc.netlify.app/_next/static/media/mongoDB.d8d2b67f.svg",
  },
  {
    name: "Redux",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "GraphQL",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2200,
  autoplaySpeed: 2200,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Skills() {
  return (
    <section className="scroll-mt-32 space-y-8" id="skills">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-kicker">Stack</p>
        <h2 className="section-title mt-2">Tecnologias con las que trabajo</h2>
        <p className="section-copy mt-3 max-w-2xl">
          Herramientas y tecnologias que uso en proyectos personales y
          colaborativos.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.42, delay: 0.06, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Slider {...settings}>
          {logos.map((tech) => (
            <div className="px-2 sm:px-3" key={tech.name}>
              <motion.div
                className="surface-card group mx-auto flex h-36 w-full max-w-[170px] flex-col items-center justify-center gap-2 rounded-2xl p-4"
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <img
                  alt={tech.name}
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                  src={tech.img}
                />
                <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                  {tech.name}
                </span>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
