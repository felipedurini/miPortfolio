import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

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

return (
  <>
    <div id="skills" style={{ position: "relative", top: "-90px" }} />

    <div className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
      <Slider {...settings}>
        {logos.map((tech, index) => (
          <div key={index} className="flex justify-center items-center h-40">
            <div className="bg-white shadow-md rounded-xl p-4 w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center transition-transform hover:scale-105">
              <img
                alt={tech.name}
                className="h-16 w-16 md:h-20 md:w-20 object-contain mb-2"
                src={tech.img}
              />
              <span className="text-xs font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </>
);

}
