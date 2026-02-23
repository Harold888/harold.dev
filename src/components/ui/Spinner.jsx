import clsx from "clsx";

export default function Spinner({
  className,
  size = 20,
  variante = "secundario",
}) {
  const estilosBase = "inline-block animate-spin rounded-full border-2";

  const estilos = {
    primario:
      "border-blue-500/60 border-t-blue-500 " +
      "dark:border-blue-400/60 dark:border-t-blue-300",

    peligro:
      "border-red-500/60 border-t-red-500 " +
      "dark:border-red-400/60 dark:border-t-red-300",

    secundario:
      "border-gray-400 border-t-gray-600 " +
      "dark:border-gray-500 dark:border-t-gray-300",

    fantasma:
      "border-gray-300/60 border-t-gray-400 " +
      "dark:border-gray-500 dark:border-t-gray-600",
  };

  return (
    <span
      className={clsx(
        estilosBase,
        estilos[variante] || estilos.primario,
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
