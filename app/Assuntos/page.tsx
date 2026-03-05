"use client"

import { useState } from "react";
import ClasseLista from "./__Componentes/ClasseLista/ListaClasse";
import TitlePage from "./__Componentes/Title/TitlePage";
import BarraPesquisaMain from "../__ComponentesGlobais/BarraDePesquisa/MainPesquisaMain";
import BotaoAdd from "../__ComponentesGlobais/Botao/Principal";



export default function Home() {
    const [url,setUrl] = useState("Seus")


    // pagina principal, onde vai estar os componentes basicos dessa pagina como barra de tarefa, o titulo inicial e 
    // container com a lista de grupos de estudos.
    return (
        <div style={{ color: "black" }}>
            <BotaoAdd Funcao={"Classe"} path={"/Adicionar"}/>
            <BarraPesquisaMain />
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <TitlePage extra={setUrl}/>
                <ClasseLista extra={url}/>
            </div>
            
        </div>
    );
}
