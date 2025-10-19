export default function Logo() {

    const logoTitle = {
        fontSize: "40px",
        fontFamily:"'Montserrat', sans-serif"
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            height: "10%", // garante que ocupe o espaco do container pai
        }}>
            <img src="/Fotos/Gerais/Logo.png" alt="Logo do site" height="100" width="100" />
            <h2 style={logoTitle}>BRAINXX</h2>
            <h3 style={{ padding: "30px 0px 0px 20px", }}>Estude do seu jeito</h3>
        </div>
    );
}
