import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import useTheme from "../../hooks/useTheme";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/90 dark:bg-[#0d1117]/90
      backdrop-blur-md
      border-b border-gray-200 dark:border-white/5
      transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          <a
            href="#inicio"
            className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors tracking-tight"
          >
            Harold<span className="text-gray-900 dark:text-white">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                px-3 py-1.5 text-sm
                text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white
                rounded-md
                hover:bg-gray-100 dark:hover:bg-white/5
                transition-all duration-200
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.85, rotate: 20 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Cambiar tema"
              className="
              p-2 rounded-lg
              text-gray-500 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/5
              transition-colors
              "
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5 text-cyan-400" />
              )}
            </motion.button>
            <a
              href="#contacto"
              className="
              hidden md:flex items-center gap-2
              px-4 py-1.5 rounded-full
              border border-cyan-500/60
              text-sm
              text-gray-900 dark:text-white
              hover:bg-cyan-500/10
              hover:border-cyan-400
              transition-all duration-200
              "
            >
              <span className="text-base">👋</span>
              Hablemos
            </a>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Menú"
              className="
              md:hidden p-2 rounded-lg
              text-gray-600 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/5
              transition-colors
              "
            >
              {menuOpen ? (
                <HiXMark className="w-5 h-5" />
              ) : (
                <HiBars3 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="
            md:hidden overflow-hidden
            bg-white dark:bg-[#0d1117]
            border-t border-gray-200 dark:border-white/5
            "
          >
            <ul className="flex flex-col px-6 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                    block px-3 py-2 rounded-lg text-sm
                    text-gray-700 dark:text-gray-300
                    hover:text-cyan-400
                    hover:bg-gray-100 dark:hover:bg-white/5
                    transition-all
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="
                  flex items-center gap-2 px-4 py-2
                  rounded-full
                  border border-cyan-500/60
                  text-sm
                  text-gray-900 dark:text-white
                  hover:bg-cyan-500/10
                  transition-all w-fit
                  "
                >
                  <span>👋</span> Hablemos
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
