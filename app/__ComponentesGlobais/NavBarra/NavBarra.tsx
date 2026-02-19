import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavMenu(){
    // parte focada no navegador da pagina principal
    return (
        <Navbar style={{position:"relative",zIndex:10}} bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand>Estudos</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Assuntos">Assuntos</Nav.Link>
                    <Nav.Link href="/Adicionar">Adicionar</Nav.Link>
                </Nav>
                {/* adicionar parte para perfil */}
            </Container>
        </Navbar>
    )
}