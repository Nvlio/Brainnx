import "./Logo.css"


// componente de Logo  é a marca do site tem a imagem junto do texto principal
export default function Logo() {

    const logoTitle = {
        fontSize: "40px",
        fontFamily:"'Montserrat', sans-serif"
    }

    return (
        <div className="ContainerLogo">
            <img src="/Images/Logo/Logo.png" alt="Logo do site"/>
            <h3 className="textoSecundario">Estude do seu jeito</h3>
        </div>
    );
}