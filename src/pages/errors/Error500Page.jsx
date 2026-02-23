import ErrorTemplate from "../../components/errors/ErrorTemplate";
import LogoError500 from "../../assets/logoError500.svg?react";

export default function Error500Page () {
    return (
        <ErrorTemplate 
            codigo="500"
            tituloError="Ooops! Error interno del servidor"
            textoError="Ocurrió un error interno en el servidor. Por favor, inténtalo de nuevo más tarde o contacta al administrador del sistema."
            imagenError={LogoError500}
            altImagenError="Error 500: Error interno del servidor"
        />
    )
}