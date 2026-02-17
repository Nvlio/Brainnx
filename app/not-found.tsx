import Image from "next/image";
import "./general.css"

export default function NotFound() {
    // pagina de erro padrão é trazido para aqui caso não exista determinada pagina.

    return (
        <div className="Container">
            <div className="NFMask">
                <Image className="NFImage" src="/Images/404Page/notFound.jpg" alt="Imagem de erro 404: 'Não encontrado'" width={1000} height={1000} />
            </div>
            <a href="/"><button type="button" style={{justifyItems:"center"}} className="btn btn-outline-primary">Voltar para pagina principal</button></a>
        </div>
    )
}