import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase } from "react-icons/fi";

const EXPERIENCIA = [
  {
    titulo: "Coordinador IT",
    empresa: "Dinámica en Servicios — Colombia",
    periodo: "Nov 2023 - Presente",
    descripcion:
      "Desarrollo de aplicaciones web full stack y gestión completa de la infraestructura tecnológica de la empresa. Desde el código hasta el servidor.",
    highlights: ["React · Node.js · TypeScript", "Servidores Debian + Dokploy", "SSL · DNS · Contenedores", "Soporte y correos corporativos"],
    lado: "derecho",
  },
  {
    titulo: "Aprendiz de Desarrollo Web",
    empresa: "Tata Consultancy Services (TCS) — Colombia",
    periodo: "Abr 2023 - Oct 2023",
    descripcion:
      "Desarrollo full stack en equipo ágil dentro de una de las consultoras tecnológicas más grandes del mundo. Buenas prácticas desde el día uno.",
    highlights: ["React · Node.js · Tailwind CSS", "Metodología Scrum", "Optimización de código", "Trabajo en equipo multidisciplinario"],
    lado: "izquierdo",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Experiencia() {
  return (
    <section
      id="experiencia"
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

      <div className="max-w-4xl mx-auto relative">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // MI CAMINO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            El recorrido{" "}
            <span className="text-cyan-500 dark:text-cyan-400">hasta aquí</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Cada trabajo me enseñó algo valioso
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Línea vertical central */}
          <div
            className="
              absolute left-1/2 top-0 bottom-0 -translate-x-1/2
              w-px
              bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent
              hidden md:block
            "
          />

          <div className="space-y-10">
            {EXPERIENCIA.map((item, i) => {
              const esDerecho = item.lado === "derecho";

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`
                    relative flex items-start gap-8
                    md:flex-row
                    ${esDerecho ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="
                        p-5 rounded-xl
                        bg-white dark:bg-white/5
                        border border-gray-200 dark:border-white/10
                        transition
                      "
                    >
                      {/* Cabecera de la card */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {item.titulo}
                          </h3>
                          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                            {item.empresa}
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 shrink-0 mt-0.5">
                          <FiCalendar size={11} />
                          {item.periodo}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {item.descripcion}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((tag, j) => (
                          <span
                            key={j}
                            className="
                              px-3 py-1 rounded-full text-xs
                              bg-cyan-500/5 dark:bg-cyan-500/10
                              text-cyan-700 dark:text-cyan-300
                              border border-cyan-500/15
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Punto central del timeline (solo en desktop) */}
                  <div className="hidden md:flex flex-col items-center shrink-0 pt-5">
                    <div
                      className="
                        w-4 h-4 rounded-full
                        bg-cyan-500
                        border-2 border-white dark:border-[#080d14]
                        shadow-[0_0_10px_rgba(34,211,238,0.5)]
                        z-10
                      "
                    />
                  </div>

                  {/* Espacio del otro lado para el layout alternado */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>

          {/* Indicador de inicio al fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
              hidden md:flex
              flex-col items-center mt-8
            "
          >
            <div
              className="
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-white dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-xs text-gray-500 dark:text-gray-500
              "
            >
              <FiBriefcase size={12} />
              El comienzo del viaje
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
