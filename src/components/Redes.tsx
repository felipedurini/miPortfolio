import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipedurini",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg",
    handle: "linkedin.com/in/felipedurini",
    tone: "from-[#0A66C2]/16 via-[#0A66C2]/10 to-transparent",
  },
  {
    label: "GitHub",
    href: "https://github.com/felipedurini",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    handle: "github.com/felipedurini",
    tone: "from-slate-500/22 via-slate-500/8 to-transparent dark:from-slate-300/15 dark:via-slate-300/5",
  },
];

const Redes = () => (
  <section className="scroll-mt-32 space-y-8" id="social">
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="section-kicker">Contacto</p>
      <h2 className="section-title mt-2">Mis redes</h2>
      <p className="section-copy mt-3 max-w-2xl">
        Perfiles para contacto profesional y codigo fuente de proyectos.
      </p>
    </motion.header>

    <div className="grid gap-4 sm:grid-cols-2">
      {socialLinks.map((item, index) => (
        <motion.a
          className="surface-card group relative overflow-hidden rounded-2xl p-5"
          href={item.href}
          initial={{ opacity: 0, y: 16 }}
          key={item.label}
          rel="noopener noreferrer"
          target="_blank"
          transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4, scale: 1.01 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.tone}`}
          />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 p-2 shadow-sm dark:border-slate-600/60 dark:bg-slate-900/70">
              <img alt={item.label} className="h-full w-full object-contain" src={item.icon} />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.label}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {item.handle}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Redes;
