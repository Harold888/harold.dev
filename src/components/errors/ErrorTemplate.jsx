import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Button from "../ui/Button";

export default function ErrorTemplate({
  codigo,
  tituloError,
  textoError,
  imagenError: ImagenError,
  altImagenError,
  imagenSize = "w-70",
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  dark:bg-gray-900 px-6 text-center">
      {ImagenError && (
        <div>
          <ImagenError
            className={clsx(imagenSize, "text-gray-900 dark:text-white mb-6")}
            aria-label={altImagenError}
            role="img"
          />
        </div>
      )}

      {codigo && (
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-200 mb-2">
          {codigo}
        </h1>
      )}

      <h2 className="md:text-2xl 2xl:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        {tituloError}
      </h2>

      <p className="text-gray-500 dark:text-gray-300 max-w-md mb-6 2xl:text-lg">
        {textoError}
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <Button variante="primario" onClick={() => navigate("/")}>
          Volver al inicio
        </Button>
      </div>

      {codigo && (
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
          Código de error: {codigo}
        </p>
      )}
    </div>
  );
}
