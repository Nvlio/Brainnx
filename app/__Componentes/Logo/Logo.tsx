import "../Logo/Logo.css"

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