import { motion } from "framer-motion";
import {
  FiCode,
  FiTerminal,
  FiPackage,
  FiCloud,
  FiLock,
  FiDatabase,
  FiGlobe,
  FiServer,
  FiCpu,
  FiTool,
} from "react-icons/fi";

const TABS_ICONS = [FiCode, FiTerminal, FiPackage, FiCloud, FiLock, FiDatabase];

const CATEGORIAS = [
  {
    icon: FiGlobe,
    titulo: "Frontend",
    tecnologias: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    icon: FiServer,
    titulo: "Backend",
    tecnologias: ["Node.js", "Python", "PHP", "Express", "TypeScript", "JavaScript", "Prisma ORM"],
  },
  {
    icon: FiDatabase,
    titulo: "Bases de Datos",
    tecnologias: ["MariaDB", "MySQL"],
  },
  {
    icon: FiCloud,
    titulo: "Cloud & DevOps",
    tecnologias: ["AWS", "Azure", "Docker", "Dokploy"],
  },
  {
    icon: FiCpu,
    titulo: "Infraestructura",
    tecnologias: ["Debian", "Ubuntu", "Nginx", "Backblaze B2 (Storage)"],
  },
  {
    icon: FiTool,
    titulo: "Herramientas",
    tecnologias: ["Git", "Huly", "Insomnia", "n8n"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="
        py-24 px-6
        bg-gray-50 dark:bg-[#080d14]
        relative overflow-hidden
      "
    >
      {/* Grid decorativo */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)]
          bg-[size:48px_48px]
          pointer-events-none
        "
      />

      <div className="max-w-5xl mx-auto relative">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // STACK TECNOLÓGICO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Habilidades{" "}
            <span className="text-cyan-500 dark:text-cyan-400">Técnicas</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Dominio de tecnologías modernas para crear soluciones completas y escalables
          </p>
        </motion.div>

        {/* Íconos decorativos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-14"
        >
          {TABS_ICONS.map((Icon, i) => (
            <div
              key={i}
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-xl
                bg-white dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-cyan-500 dark:text-cyan-400
              "
            >
              <Icon size={20} />
            </div>
          ))}
        </motion.div>

        {/* Grid de categorías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CATEGORIAS.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="
                  p-5 rounded-xl
                  bg-white dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  backdrop-blur transition
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      rounded-lg
                      bg-cyan-500/10
                      text-cyan-500 dark:text-cyan-400
                    "
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {cat.titulo}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 rounded-full text-xs
                        bg-gray-100 dark:bg-white/5
                        text-gray-700 dark:text-gray-300
                        border border-gray-200 dark:border-white/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
