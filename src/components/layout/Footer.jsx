import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const SOCIAL_LINKS = [
  {
    icon: <FiGithub className="w-4 h-4" />,
    href: "https://github.com/Harold888",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin className="w-4 h-4" />,
    href: "https://www.linkedin.com/in/harold-andrey-ramirez-munoz-977545138",
    label: "LinkedIn",
  },
  {
    icon: <FiMail className="w-4 h-4" />,
    href: "mailto:people_harold88@hotmail.com",
    label: "Email",
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0d1117] border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-6 md:gap-0">
          <div>
            <a
              href="#inicio"
              className="text-xl font-bold text-cyan-500 dark:text-cyan-400 hover:text-cyan-400 transition-colors tracking-tight"
            >
              Harold<span className="text-gray-900 dark:text-white">.dev</span>
            </a>

            <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">
              FullStack Developer
            </p>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="
                p-2.5 rounded-full
                border border-gray-200 dark:border-white/10
                text-gray-500 dark:text-gray-400
                hover:text-cyan-500 dark:hover:text-cyan-400
                hover:border-cyan-500/40
                hover:bg-cyan-500/5
                transition-all duration-200
                "
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5" />

        <div className="py-5 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © {CURRENT_YEAR} Todos los derechos reservados.
            <span className="text-gray-700 dark:text-gray-400">
              {" "}
              Diseñado y desarrollado con{" "}
              <span className="text-cyan-500 dark:text-cyan-400">pasión</span>.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
