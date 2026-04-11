import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const INFO = [
  {
    icono: FiMail,
    label: "Email",
    valor: "people_harold88@hotmail.com",
    href: "mailto:people_harold88@hotmail.com",
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    icono: FiPhone,
    label: "Teléfono",
    valor: "+57 305 423 1950",
    href: "tel:+573054231950",
    color: "text-green-500 bg-green-500/10",
  },
  {
    icono: FiMapPin,
    label: "Ubicación",
    valor: "Bogotá, Colombia",
    href: null,
    color: "text-purple-500 bg-purple-500/10",
  },
];

const SOCIALES = [
  {
    icono: FiGithub,
    label: "GitHub",
    href: "https://github.com/Harold888",
  },
  {
    icono: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harold-andrey-ramirez-munoz-977545138",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;
    const subject = encodeURIComponent(`Contacto desde portafolio — ${nombre}`);
    const body = encodeURIComponent(
      `Hola Harold,\n\nMe pongo en contacto desde tu portafolio.\n\nNombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    window.location.href = `mailto:people_harold88@hotmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="
        py-24 px-6
        bg-white dark:bg-[#0d1117]
        relative overflow-hidden
      "
    >
      {/* Gradiente decorativo */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.07),transparent_65%)]
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
            // HABLEMOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            ¿Tienes un{" "}
            <span className="text-cyan-500 dark:text-cyan-400">proyecto?</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Estoy disponible para proyectos freelance, colaboraciones y nuevas
            oportunidades. ¡Escríbeme y hablamos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Columna izquierda — Info de contacto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {INFO.map((item, i) => {
              const Icon = item.icono;
              const contenido = (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-gray-50 dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    transition cursor-default
                  "
                >
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-lg shrink-0 ${item.color}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">
                      {item.valor}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={i} href={item.href} className="block">
                  {contenido}
                </a>
              ) : (
                <div key={i}>{contenido}</div>
              );
            })}

            {/* Redes sociales */}
            <motion.div
              variants={cardVariants}
              className="
                flex gap-3 pt-2
              "
            >
              {SOCIALES.map((red, i) => {
                const Icon = red.icono;
                return (
                  <motion.a
                    key={i}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2
                      px-4 py-2.5 rounded-xl
                      bg-gray-50 dark:bg-white/5
                      border border-gray-200 dark:border-white/10
                      text-sm text-gray-700 dark:text-gray-300
                      hover:text-cyan-500 dark:hover:text-cyan-400
                      hover:border-cyan-500/40
                      transition
                    "
                  >
                    <Icon size={16} />
                    {red.label}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Disponibilidad */}
            <motion.div
              variants={cardVariants}
              className="
                flex items-center gap-3 p-4 rounded-xl
                bg-cyan-500/5 dark:bg-cyan-500/10
                border border-cyan-500/20
              "
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
              </span>
              <p className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">
                Disponible para proyectos freelance
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha — Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              p-6 rounded-xl
              bg-gray-50 dark:bg-white/5
              border border-gray-200 dark:border-white/10
            "
          >
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Nombre */}
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                  Nombre
                </label>
                <div className="relative">
                  <FiUser
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="
                      w-full pl-9 pr-4 py-2.5
                      rounded-lg text-sm
                      bg-white dark:bg-white/5
                      border border-gray-200 dark:border-white/10
                      text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-600
                      focus:outline-none focus:border-cyan-500/60
                      transition
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <FiMail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="
                      w-full pl-9 pr-4 py-2.5
                      rounded-lg text-sm
                      bg-white dark:bg-white/5
                      border border-gray-200 dark:border-white/10
                      text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-600
                      focus:outline-none focus:border-cyan-500/60
                      transition
                    "
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                  Mensaje
                </label>
                <div className="relative">
                  <FiMessageSquare
                    size={14}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="
                      w-full pl-9 pr-4 py-2.5
                      rounded-lg text-sm
                      bg-white dark:bg-white/5
                      border border-gray-200 dark:border-white/10
                      text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-600
                      focus:outline-none focus:border-cyan-500/60
                      transition resize-none
                    "
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 rounded-xl
                  bg-cyan-500 hover:bg-cyan-400
                  text-white font-semibold text-sm
                  transition
                "
              >
                {enviado ? (
                  "¡Mensaje preparado! Revisa tu correo 📬"
                ) : (
                  <>
                    <FiSend size={15} />
                    Enviar mensaje
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                Al enviar, se abrirá tu cliente de correo con el mensaje listo.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
