import { motion } from "framer-motion";
import { FiServer, FiCode, FiBookOpen, FiHeart } from "react-icons/fi";
import Button from "./ui/Button";

const CARDS = [
  {
    icon: FiServer,
    titulo: "Infraestructura",
    texto: "Me fascina optimizar servidores y arquitecturas cloud",
  },
  {
    icon: FiCode,
    titulo: "Código limpio",
    texto: "Creo que el buen código es como poesía técnica",
  },
  {
    icon: FiBookOpen,
    titulo: "Aprendizaje",
    texto: "Siempre explorando nuevas tecnologías y frameworks",
  },
  {
    icon: FiHeart,
    titulo: "Open Source",
    texto: "Contribuyo a la comunidad cuando puedo",
  },
];

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="
      py-24
      px-6
      bg-white
      dark:bg-[#0d1117]
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium tracking-widest">
            // SOBRE MÍ
          </span>

          <h2
            className="
            text-4xl md:text-5xl
            font-bold
            mt-4
            text-gray-900
            dark:text-white
            "
          >
            Un poco sobre{" "}
            <span className="text-cyan-500 dark:text-cyan-400">quién soy</span>
          </h2>

          <div className="space-y-6 mt-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              ¡Hola! 👋 Soy un desarrollador apasionado por crear aplicaciones
              web modernas y eficientes. Lo que comenzó como curiosidad por cómo
              funcionan las cosas se convirtió en mi camino profesional.
            </p>

            <p>
              Me encanta resolver problemas y construir experiencias digitales
              que sean rápidas, accesibles y agradables para los usuarios.
            </p>

            <p>
              Cuando no estoy programando probablemente estoy leyendo sobre
              nuevas tecnologías, jugando videojuegos o tomando demasiado café
              ☕
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-1.5 rounded-full text-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              🎮 Gaming
            </span>

            <span className="px-4 py-1.5 rounded-full text-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              🎧 Música
            </span>

            <span className="px-4 py-1.5 rounded-full text-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              📚 Lectura Tech
            </span>
          </div>

          <div className="mt-8">
            <a href="/Harold_Ramirez.pdf" download>
              <Button variante="primario">Descargar mi CV ↓</Button>
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                p-6
                rounded-xl
                border border-gray-200 dark:border-white/10
                bg-gray-50 dark:bg-white/5
                backdrop-blur
                transition
                "
              >
                <div
                  className="
                  w-11 h-11
                  flex items-center justify-center
                  rounded-lg
                  bg-cyan-500/10
                  text-cyan-500 dark:text-cyan-400
                  mb-4
                  "
                >
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {card.titulo}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {card.texto}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
