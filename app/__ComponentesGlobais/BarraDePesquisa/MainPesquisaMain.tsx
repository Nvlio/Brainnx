
"use client"

import { useState } from "react";
import "./MainPesquisaMain.css"



//elemento que vai conter barra de pesquisa da pagina inicial
export default function BarraPesquisaMain() {
    const [mouseOver, setMouseOver] = useState(false);//define se o mouse esta em cima do botao
    const [ampliar, setAmpliar] = useState(false);//define se o elemento deve ou nao ser ampliado
    const [pesquisa, setPesquisa] = useState("");//salva a informacao digitada pelo usuario

    const ativo = ampliar || pesquisa!=="";

    return (
        <form className={`SearchBar ${ativo? "SearchBarAmpliado":""}`} onMouseOver={()=>{setAmpliar(true)}} onMouseOut={()=>{setAmpliar(false)}}>
            <p>Pesquisar</p>
            <div className={`InputButtonContainer`}>
                <input type="text" className="SearchBarInput" placeholder="Pesquise a classe de estudos" value={pesquisa} onChange={(e)=>{setPesquisa(e.target.value)}}/>
                <button className="SearchBarButton">Pesquisar</button>
            </div>
        </form>
    )

}