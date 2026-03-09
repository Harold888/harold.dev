
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCoffee } from "react-icons/fi";
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
      relative
      min-h-[92vh]
      flex flex-col items-center justify-center
      px-6
      text-center
      bg-white
      dark:bg-[#0d1117]
      overflow-hidden
      "
    >
      {/* Glow background */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]
        pointer-events-none
        "
      />

      <div className="relative max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          inline-flex items-center gap-2
          px-4 py-1.5
          rounded-full
          text-sm
          border border-cyan-500/30
          text-cyan-600 dark:text-cyan-400
          bg-cyan-500/5
          mb-6
          "
        >
          👋 ¡Hola! Bienvenido a mi espacio
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          text-4xl md:text-6xl font-bold
          text-gray-900 dark:text-white
          leading-tight
          "
        >
          Soy{" "}
          <span
            className="
            bg-gradient-to-r
            from-cyan-500
            via-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            animate-pulse
            "
          >
            Harold
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
          text-2xl md:text-4xl
          text-gray-700 dark:text-gray-300
          font-medium
          mt-4
          "
        >
          Frontend Developer & UI Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          mt-6
          text-gray-600 dark:text-gray-400
          max-w-2xl mx-auto
          text-lg
          "
        >
          Me apasiona crear interfaces modernas, accesibles y rápidas.
          Disfruto construir experiencias web que combinan diseño,
          rendimiento y buenas prácticas de desarrollo.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button variante="primario">
            Conóceme →
          </Button>

          <Button variante="secundario">
            Ver mis proyectos
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-10"
        >
          {[FiGithub, FiLinkedin, FiCoffee].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              border border-gray-200 dark:border-white/10
              text-gray-600 dark:text-gray-400
              hover:text-cyan-500 dark:hover:text-cyan-400
              hover:border-cyan-500/40
              hover:bg-cyan-500/5
              transition
              "
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
