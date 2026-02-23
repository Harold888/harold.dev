import ErrorTemplate from "../../components/errors/ErrorTemplate";
import LogoError403 from "../../assets/logoError403.svg?react";

export default function Error403Page () {
    return (
        <ErrorTemplate 
            codigo="403"
            tituloError="Ooops! Acceso denegado"
            textoError="No tienes permiso para acceder a esta página. Verifica tus credenciales o contacta al administrador."
            imagenError={LogoError403}
            altImagenError="Error 403: Acceso denegado"
        />
    )
}