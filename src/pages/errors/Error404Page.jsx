import ErrorTemplate from "../../components/errors/ErrorTemplate";
import LogoError404 from "../../assets/logoError404.svg?react";

export default function Error404Page () {
    return (
        <ErrorTemplate 
            codigo="404"
            tituloError="Ooops! Página no encontrada"
            textoError="La página que estás buscando no existe o ha sido movida. Verifica la URL o regresa al inicio."
            imagenError={LogoError404}
            altImagenError="Error 404: Página no encontrada"
        />
    )
}