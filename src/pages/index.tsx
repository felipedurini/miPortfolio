import DefaultLayout from "@/layouts/default";
import AboutCard from "@/components/AboutMe";
import miFoto from "@/images/miFoto.png";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Redes from "@/components/Redes";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 mt-10 px-4">
        <img
          alt="Felipe Durini"
          className="w-60 h-60 rounded-full object-cover"
          src={miFoto}
        />
        <AboutCard />
      </div>

      <div className="mt-10 px-4">
        <Skills />
      </div>
      <Projects />
      <Redes />

    </DefaultLayout>
  );
}
