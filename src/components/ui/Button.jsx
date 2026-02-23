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
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition " +
    "disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantes = {
    primario: {
      fondo:
        "bg-gradient-to-r from-blue-600 to-cyan-500 " +
        "hover:from-blue-700 hover:to-cyan-600 " +
        "focus:ring-cyan-400 " +
        "dark:from-blue-800 dark:to-indigo-700 " +
        "dark:hover:from-blue-900 dark:hover:to-indigo-800 " +
        "dark:focus:ring-indigo-500 dark:focus:ring-offset-slate-950",
      texto: "text-white",
    },

    secundario: {
      fondo:
        "bg-gradient-to-r from-gray-200 to-gray-100 " +
        "hover:from-gray-300 hover:to-gray-200 " +
        "focus:ring-gray-400 " +
        "dark:from-slate-800 dark:to-slate-700 " +
        "dark:hover:from-slate-700 dark:hover:to-slate-600 " +
        "dark:focus:ring-gray-500 dark:focus:ring-offset-slate-950",
      texto: "text-gray-900 dark:text-gray-100",
    },

    peligro: {
      fondo:
        "bg-gradient-to-r from-red-600 to-rose-500 " +
        "hover:from-red-700 hover:to-rose-600 " +
        "focus:ring-rose-400 " +
        "dark:from-red-700 dark:to-rose-600 " +
        "dark:hover:from-red-800 dark:hover:to-rose-700 " +
        "dark:focus:ring-red-500 dark:focus:ring-offset-slate-950",
      texto: "text-white",
    },

    fantasma: {
      fondo:
        "bg-gradient-to-r from-transparent to-transparent " +
        "hover:from-gray-100 hover:to-gray-200 " +
        "dark:hover:from-slate-800 dark:hover:to-slate-700 " +
        "focus:ring-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-slate-950",
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
        className,
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
