"use client"

import { useState } from "react";
import NavMenu from "./__ComponentesGlobais/NavBarra/NavBarra";
import MainTitle from "./__ComponentesGlobais/MainTitle/MainTitlePage";
import NewSectionIssues from "./__ComponentesGlobais/NewIssues/NewIssues";



export default function Home() {
    const [url, setUrl] = useState("Seus")


    // pagina principal, onde vai estar os componentes basicos dessa pagina como barra de tarefa, o titulo inicial e 
    // container com a lista de grupos de estudos.
    return (
        <div style={{ color: "black" }}>
            <NavMenu />
            <MainTitle />
            <NewSectionIssues/>
        </div>
    );
}
