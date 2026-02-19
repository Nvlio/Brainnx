"use client"

import { useState } from "react";
import ClasseLista from "./Assuntos/__Componentes/ClasseLista/ListaClasse";
import TitlePage from "./Assuntos/__Componentes/Title/TitlePage";
import BarraPesquisaMain from "./__ComponentesGlobais/BarraDePesquisa/MainPesquisaMain";
import BotaoAdd from "./__ComponentesGlobais/Botao/Principal";
import NavMenu from "./__ComponentesGlobais/NavBarra/NavBarra";
import MainTitle from "./__ComponentesGlobais/MainTitle/MainTitlePage";
import NewSectionIssues from "./__ComponentesGlobais/NewIssues/NewIssues";



export default function Home() {
    const [url, setUrl] = useState("Seus")


    // pagina principal, onde vai estar os componentes basicos dessa pagina como barra de tarefa, o titulo inicial e 
    // container com a lista de grupos de estudos.
    return (
        <div style={{ color: "black" }}>
            <BotaoAdd />
            <NavMenu />
            <MainTitle />
            <NewSectionIssues/>
        </div>
    );
}
