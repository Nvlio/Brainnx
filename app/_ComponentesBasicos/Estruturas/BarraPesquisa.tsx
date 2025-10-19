
"use client"

import { useState } from "react";
//elemento que vai conter barra de pesquisa da pagina inicial
export default function BarraPesquisa() {
    const [mouseOver, setMouseOver] = useState(false);//define se o mouse esta em cima do botao
    const [ampliar, setAmpliar] = useState(false);//define se o elemento deve ou nao ser ampliado
    const [pesquisa, setPesquisa] = useState("");//salva a informacao digitada pelo usuario


    return (
        <form className={`pesquisaEstilo ${ampliar?"ampliado":""}`} onMouseOver={() => { setAmpliar(true) }} onMouseOut={() => { setAmpliar(false) }}>

            <div className={`pesquisaInput ${ampliar?"visivel":""}`}>
                <input
                    type="text"
                    placeholder="Pesquise Titulo ou Tag"
                    onChange={(e) => { setPesquisa(e.target.value) }}
                    value={!ampliar ? "" : pesquisa}
                    />

                <button
                    type="submit"
                    className={mouseOver?"sobre":""}
                    onMouseOver={() => { setMouseOver(true) }}
                    onMouseOut={() => { setMouseOver(false) }}
                    onClick={(e) => { e.preventDefault(); console.log("sss") }}>
                    <h4>Pesquisar</h4>
                </button>
            </div>

        </form>
    )

}