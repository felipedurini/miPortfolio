import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import AboutCard from "@/components/AboutMe";
import miFoto from "@/images/miFoto.png";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Redes from "@/components/Redes";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="grid scroll-mt-32 items-center gap-8 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]"
        id="about"
      >
        <motion.div
          {...fadeInUp}
          className="mx-auto w-full max-w-[240px] md:max-w-[260px]"
        >
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-2">
            <img
              alt="Felipe Durini"
              className="h-auto w-full rounded-[1.65rem] object-cover"
              src={miFoto}
            />
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.08 }}>
          <AboutCard />
        </motion.div>
      </section>

      <Skills />
      <Projects />
      <Redes />
    </DefaultLayout>
  );
}
