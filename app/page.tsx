import Image from "next/image";
import BarraPesquisa from "./_ComponentesBasicos/Estruturas/BarraPesquisa";
import ListaEstudos from "./_ComponentesBasicos/Estruturas/Lista_Estudo"

import "./_Estilos/Estrutural.css";


export default function Home() {
    return (
        <div style={{ color: "black" }}>
            <BarraPesquisa />
            <br />
            <h1 className="TituloPrincipal" >Lista de Estudo</h1>
            <hr style={{ border: "lightgray 1px solid", width: "95%", marginLeft: "2%" }} />
            <br/>
            <ListaEstudos/>
        </div>
    );
}
