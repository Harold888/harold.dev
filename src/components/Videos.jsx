import { motion } from "framer-motion";
import { FiPlay, FiExternalLink } from "react-icons/fi";

const VIDEOS = [
  {
    titulo: "Setup de mi Entorno de Desarrollo",
    descripcion: "Un tour por las herramientas y configuraciones que uso día a día",
    duracion: "8:24",
    categoria: "Setup",
    gradiente: "from-slate-800 via-slate-900 to-gray-900",
  },
  {
    titulo: "Automatización con Docker",
    descripcion: "Cómo containerizo mis proyectos para desarrollo y producción",
    duracion: "12:30",
    categoria: "DevOps",
    gradiente: "from-blue-900 via-blue-950 to-slate-900",
  },
  {
    titulo: "Mi Homelab Server",
    descripcion: "Explorando mi servidor personal donde experimento con todo",
    duracion: "15:45",
    categoria: "Infraestructura",
    gradiente: "from-slate-700 via-zinc-800 to-slate-900",
  },
  {
    titulo: "Debugging en Producción",
    descripcion: "Técnicas y herramientas que uso para resolver problemas reales",
    duracion: "18:12",
    categoria: "Tips",
    gradiente: "from-purple-900 via-violet-950 to-slate-900",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Videos() {
  return (
    <section
      id="videos"
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
          className="text-center mb-14"
        >
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // VIDEOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Contenido que{" "}
            <span className="text-cyan-500 dark:text-cyan-400">comparto</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Me gusta documentar lo que aprendo y compartirlo con la comunidad
          </p>
        </motion.div>

        {/* Grid de videos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="
                rounded-xl overflow-hidden
                bg-white dark:bg-white/5
                border border-gray-200 dark:border-white/10
                group cursor-pointer
                transition
              "
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${video.gradiente}`}>
                {/* Patrón decorativo */}
                <div
                  className="
                    absolute inset-0
                    bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]
                    bg-[size:18px_18px]
                  "
                />

                {/* Badge categoría */}
                <span
                  className="
                    absolute top-3 left-3
                    px-2.5 py-0.5 rounded text-xs font-medium
                    bg-cyan-500/90 dark:bg-cyan-500
                    text-white
                  "
                >
                  {video.categoria}
                </span>

                {/* Botón play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-14 h-14
                      flex items-center justify-center
                      rounded-full
                      bg-cyan-500
                      text-white
                      shadow-lg shadow-cyan-500/30
                      group-hover:bg-cyan-400
                      transition-colors
                    "
                  >
                    <FiPlay size={22} className="ml-1" />
                  </motion.div>
                </div>

                {/* Duración */}
                <span
                  className="
                    absolute bottom-3 right-3
                    px-2 py-0.5 rounded text-xs font-medium
                    bg-black/70 backdrop-blur
                    text-white
                  "
                >
                  {video.duracion}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {video.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {video.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link YouTube */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="
              inline-flex items-center gap-2
              text-cyan-500 dark:text-cyan-400
              hover:text-cyan-600 dark:hover:text-cyan-300
              font-medium transition-colors
            "
          >
            Ver más en YouTube
            <FiExternalLink size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
