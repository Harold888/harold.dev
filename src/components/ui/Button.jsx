import clsx from "clsx";
import Spinner from "./Spinner";

export default function Button({
  children,
  className,
  variante = "primario",
  cargando = false,
  textoCargando = "Cargando...",
  deshabilitado = false,
  tipo = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 " +
    "disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-offset-white dark:focus:ring-offset-[#0d1117]";

  const variantes = {
    primario: {
      fondo:
        "bg-gradient-to-r from-cyan-500 to-cyan-400 " +
        "hover:from-cyan-600 hover:to-cyan-500 " +
        "focus:ring-cyan-400",
      texto: "text-white",
    },

    secundario: {
      fondo:
        "bg-gray-200 hover:bg-gray-300 " +
        "dark:bg-white/10 dark:hover:bg-white/20 " +
        "focus:ring-gray-400",
      texto: "text-gray-900 dark:text-white",
    },

    peligro: {
      fondo:
        "bg-gradient-to-r from-red-600 to-rose-500 " +
        "hover:from-red-700 hover:to-rose-600 " +
        "focus:ring-rose-400",
      texto: "text-white",
    },

    fantasma: {
      fondo:
        "bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 " +
        "focus:ring-gray-300 dark:focus:ring-gray-600",
      texto: "text-gray-900 dark:text-gray-100",
    },
  };

  const estilosVariantes = variantes[variante] || variantes.primario;

  return (
    <button
      type={tipo}
      disabled={deshabilitado || cargando}
      aria-busy={cargando}
      className={clsx(
        base,
        estilosVariantes.fondo,
        estilosVariantes.texto,
        className
      )}
      {...props}
    >
      {cargando ? (
        <>
          <Spinner size={18} variante={variante} />
          <span className={estilosVariantes.texto}>{textoCargando}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
