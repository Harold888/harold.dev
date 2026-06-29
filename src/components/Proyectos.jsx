import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiLock,
  FiStar,
  FiMapPin,
} from "react-icons/fi";

const PROYECTOS = [
  {
    titulo: "HireFlow - ATS & Recruiting Platform",
    descripcion:
      "Plataforma ATS completa para gestión de reclutamiento con dashboards de productividad, seguimiento de candidatos y control de contratación.",
    tecnologias: [
      "React",
      "JavaScript",
      "Node.js",
      "Prisma",
      "MySQL",
      "TailwindCSS",
    ],
    privado: true,
    cliente: "Empresa de RRHH",
    demo: "https://hireflow.proyeccionlaboral.com/",
    codigo: null,
    imagen: "/proyectos/hireflow.png",
    gradiente: "from-indigo-900 via-blue-950 to-slate-900",
    destacado: true,
    leccion: "Mi proyecto FullStack más complejo",
  },
  {
    titulo: "Evamailer - Email Marketing Platform",
    descripcion:
      "Plataforma de email marketing masivo con métricas en tiempo real, personalización por variables y adjuntos dinámicos vía SMTP.",
    tecnologias: [
      "Node.js",
      "Express",
      "JavaScript",
      "MySQL",
      "Nodemailer",
      "React",
      "TailwindCSS",
      "Chart.js",
    ],
    privado: true,
    cliente: "Proyecto SaaS",
    demo: "https://evamailer.proyeccionlaboral.com/",
    codigo: null,
    imagen: "/proyectos/evamailer.png",
    gradiente: "from-cyan-900 via-teal-950 to-slate-900",
    destacado: true,
    leccion: "Alto volumen de datos y métricas",
  },
  {
    titulo: "Avianca - Error Handling UI",
    descripcion:
      "Páginas de error personalizadas (404/500) para el booking de Avianca, manteniendo identidad de marca y mejorando la UX.",
    tecnologias: ["React", "Vite", "React Router", "TailwindCSS", "JavaScript"],
    privado: true,
    cliente: "Avianca",
    demo: null,
    codigo: null,
    imagen: null,
    gradiente: "from-red-900 via-rose-950 to-slate-900",
    destacado: true,
    leccion: "UX bajo presión",
  },
  {
    titulo: "Dentigroup - Clínica Odontológica",
    descripcion:
      "Sitio corporativo con agendamiento de citas vía email/WhatsApp, reseñas de Google integradas y notificaciones automáticas.",
    tecnologias: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "WhatsApp API",
      "Nodemailer",
    ],
    privado: true,
    cliente: "Dentigroup",
    demo: "https://www.dentigrouplago.com/",
    codigo: null,
    imagen: "/proyectos/dentigroup.png",
    gradiente: "from-emerald-900 via-teal-950 to-slate-900",
    destacado: false,
    leccion: "Conversión mediante UX intuitiva",
  },
  {
    titulo: "Proyección Laboral - Portal Corporativo",
    descripcion:
      "Portal con directorio de empresas y candidatos, integración con CompuTrabajo, módulo de PQRS y canales de contacto.",
    tecnologias: [
      "React",
      "Vite",
      "TailwindCSS",
      "Flowbite",
      "Nodemailer",
      "JavaScript",
    ],
    privado: true,
    cliente: "Proyección Laboral",
    demo: "https://www.proyeccionlaboral.com/",
    codigo: null,
    imagen: "/proyectos/proyeccion-laboral.png",
    gradiente: "from-sky-900 via-indigo-950 to-slate-900",
    destacado: false,
    leccion: "Integración de marketplaces",
  },
  {
    titulo: "Workflow Automation Hub - n8n",
    descripcion:
      "Automatización de envíos masivos de WhatsApp vía email, extracción y comparación de informes de múltiples fuentes.",
    tecnologias: [
      "n8n",
      "Node.js",
      "WhatsApp Business API",
      "Nodemailer",
      "REST APIs",
      "CSV Parsing",
    ],
    privado: true,
    cliente: "Dinámica en servicios SAS",
    demo: null,
    codigo: null,
    imagen: "/proyectos/workflow.png",
    gradiente: "from-violet-900 via-purple-950 to-slate-900",
    destacado: false,
    leccion: "Automatización inteligente",
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

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="
        py-24 px-6
        bg-white dark:bg-[#0d1117]
        relative overflow-hidden
      "
    >
      {/* Grid decorativo */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)]
          bg-[size:48px_48px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // MIS PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Cosas que he{" "}
            <span className="text-cyan-500 dark:text-cyan-400">construido</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Ecosistema de proyectos enfocados en la escalabilidad,
            automatización de procesos y desarrollo Full Stack avanzado.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROYECTOS.map((proyecto, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="
                rounded-xl overflow-hidden
                bg-gray-50 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                flex flex-col
                transition
              "
            >
              {/* Imagen / Gradiente */}
              <div
                className={`relative h-44 bg-gradient-to-br ${proyecto.gradiente}`}
              >
                {proyecto.imagen ? (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="
                      absolute inset-0
                      bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]
                      bg-[size:20px_20px]
                    "
                  />
                )}
                {proyecto.privado && (
                  <span
                    className="
                      absolute top-3 right-3
                      flex items-center gap-1.5
                      px-2.5 py-1 rounded-full text-xs font-medium
                      bg-black/50 backdrop-blur
                      text-gray-200
                      border border-white/10
                    "
                  >
                    <FiLock size={11} />
                    Privado
                  </span>
                )}
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className={`font-bold text-lg mb-1.5 ${
                    proyecto.destacado
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {proyecto.titulo}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                {/* Lección aprendida */}
                <div
                  className="
                    flex items-start gap-2
                    px-3 py-2 rounded-lg mb-4
                    bg-cyan-500/5 dark:bg-cyan-500/10
                    border border-cyan-500/15
                    text-xs text-cyan-700 dark:text-cyan-300
                  "
                >
                  <FiStar size={12} className="mt-0.5 shrink-0" />
                  <span>{proyecto.leccion}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5 py-0.5 rounded-full text-xs
                        bg-gray-200 dark:bg-white/10
                        text-gray-700 dark:text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer de la card */}
                <div className="mt-auto flex items-center justify-between">
                  {/* Cliente */}
                  {proyecto.cliente && (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                      <FiMapPin size={11} />
                      {proyecto.cliente}
                    </span>
                  )}

                  {/* Links */}
                  {(proyecto.demo || proyecto.codigo) && (
                    <div className="flex items-center gap-3 ml-auto">
                      {proyecto.demo && (
                        <a
                          href={proyecto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          <FiExternalLink size={13} />
                          Ver sitio
                        </a>
                      )}
                      {proyecto.codigo && (
                        <a
                          href={proyecto.codigo}
                          className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          <FiGithub size={13} />
                          Código
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
