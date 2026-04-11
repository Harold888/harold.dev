import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiMonitor,
  FiCloud,
  FiSettings,
  FiTerminal,
  FiCalendar,
} from "react-icons/fi";

const EDUCACION = [
  {
    titulo: "Ingeniería de Sistemas",
    institucion: "Corporación Unificada Nacional – CUN",
    periodo: "2022 - 2026",
    descripcion:
      "Formación en curso. Profundizando en arquitecturas de software, estructuras de datos y fundamentos de ingeniería aplicados al desarrollo web.",
    icono: FiMonitor,
    colorIcono: "text-cyan-500 bg-cyan-500/10",
  },
  {
    titulo: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información Web",
    institucion: "SENA – Servicio Nacional de Aprendizaje",
    periodo: "2021 - 2023",
    descripcion:
      "Base técnica sólida en desarrollo web full stack, metodologías ágiles y ciclo de vida del software.",
    icono: FiSettings,
    colorIcono: "text-purple-500 bg-purple-500/10",
  },
];

const CURSOS = [
  { titulo: "Gestión Estratégica de Ciberseguridad", plataforma: "Atenea / LinkedIn Learning", año: "2025" },
  { titulo: "Diseño de Interfaces y UX/UI", plataforma: "Universidad Nacional de Colombia", año: "2024" },
  { titulo: "Programación con TypeScript y JavaScript", plataforma: "Universidad Distrital", año: "2023" },
  { titulo: "Desarrollo Back End – Intermedio", plataforma: "Universidad Distrital", año: "2023" },
];

const CERTIFICACIONES = [
  {
    titulo: "Introduction to Software Engineering",
    entidad: "Coursera",
    año: "2025",
    icono: FiTerminal,
    colorIcono: "text-blue-400 bg-blue-500/10",
  },
  {
    titulo: "Machine Learning with Python",
    entidad: "Coursera",
    año: "2024",
    icono: FiCloud,
    colorIcono: "text-green-400 bg-green-500/10",
  },
  {
    titulo: "Resolución de Problemas y Toma de Decisiones",
    entidad: "Coursera",
    año: "2024",
    icono: FiAward,
    colorIcono: "text-yellow-400 bg-yellow-500/10",
  },
];

const STATS = [
  { valor: "3+", etiqueta: "Certificaciones", color: "text-cyan-500 dark:text-cyan-400" },
  { valor: "4+", etiqueta: "Cursos Destacados", color: "text-purple-500 dark:text-purple-400" },
  { valor: "∞", etiqueta: "Curiosidad", color: "text-gray-700 dark:text-gray-300" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Formacion() {
  return (
    <section
      id="formacion"
      className="
        py-24 px-6
        bg-white dark:bg-[#0d1117]
        relative overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // MI FORMACIÓN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Certificados y{" "}
            <span className="text-cyan-500 dark:text-cyan-400">Estudios</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            El aprendizaje nunca termina — siempre hay algo nuevo que explorar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Columna izquierda */}
          <div className="space-y-8">

            {/* Educación formal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                  <FiBookOpen size={16} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Educación Formal
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {EDUCACION.map((item, i) => {
                  const Icon = item.icono;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="
                        p-5 rounded-xl
                        bg-gray-50 dark:bg-white/5
                        border border-gray-200 dark:border-white/10
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${item.colorIcono}`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                              {item.titulo}
                            </h4>
                            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500 shrink-0">
                              <FiCalendar size={11} />
                              {item.periodo}
                            </span>
                          </div>
                          <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-0.5 font-medium">
                            {item.institucion}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                            {item.descripcion}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Cursos destacados */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-500/10 text-green-500 dark:text-green-400">
                  <FiMonitor size={16} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Cursos Destacados
                </h3>
              </div>

              <div
                className="
                  rounded-xl
                  bg-gray-50 dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  overflow-hidden
                "
              >
                {CURSOS.map((curso, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className={`
                      flex items-center justify-between px-5 py-3.5
                      ${i !== CURSOS.length - 1 ? "border-b border-gray-200 dark:border-white/5" : ""}
                    `}
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {curso.titulo}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                        {curso.plataforma}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 shrink-0">
                      {curso.año}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Columna derecha — Certificaciones */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500 dark:text-yellow-400">
                  <FiAward size={16} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Certificaciones
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {CERTIFICACIONES.map((cert, i) => {
                  const Icon = cert.icono;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="
                        flex items-center gap-4 px-4 py-3.5
                        rounded-xl
                        bg-gray-50 dark:bg-white/5
                        border border-gray-200 dark:border-white/10
                        transition
                      "
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${cert.colorIcono}`}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {cert.titulo}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                          {cert.entidad}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 shrink-0">
                        {cert.año}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="
                  grid grid-cols-3 gap-3 mt-6
                  p-4 rounded-xl
                  bg-gray-50 dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                "
              >
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.valor}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {stat.etiqueta}
                    </p>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
