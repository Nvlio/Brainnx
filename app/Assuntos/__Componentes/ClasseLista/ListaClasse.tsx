"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import "./ListaClasse.css"
import Pagination from "../Pagination/pagination"
import LoaderSymbol from "@/app/__ComponentesGlobais/Carregamento/CarregamentoSymbol"

export default function ClasseLista({ extra }: { extra: string }) {
    const [status, setStatus] = useState("Ocioso")
    const [dados, setDados] = useState([])
    const [totalPagina,setTotalPagina] = useState(0)
    const [atualPagina,setAtualPagina]= useState(1)


    // função que chama api para pegar dados da classe, tem um parametro via url que especifica se pega apenas os visiveis
    // ao usuario ou se pega todos os que forão compartilhados por outros usuarios.
    async function getData() {
        const resp = await fetch(`/api/Classes?s=${extra}&p=${atualPagina}`)
        const info = await resp.json()
        console.log(info)
        setDados(info.data)
        const pagina = Math.floor(info.total/ 12)
        const resto = info.total%12
        setTotalPagina(pagina+(resto>0?1:0))
        setStatus("Ocioso")
    }

    useEffect(() => {
        setStatus("Carregando")
        getData()
        console.log(extra)
    }, [extra,atualPagina])

    // componente de classes da pagina
    if (status === "Ocioso") {
        return (
            <div>
                <div className="ListaContainer">

                    <div className="FlexDisplay">
                        {dados && dados.length > 0 ?
                            <>
                                {dados.map((item: any) => {
                                    return (
                                        <div className="card" style={{ width: "18rem", height: "10rem" }} key={item.id}>
                                            <Link href={`Assuntos/${item.id}`} style={{ textDecoration: 'none' }}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.nome}</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </> :
                            <div>
                                <h1>Nenhum assunto foi encontrado</h1>
                                <a>Adicionar Assunto</a>
                            </div>
                        }
                    </div>
                </div>
                {totalPagina>1?<div style={{ justifyItems: "center", margin: "10px" }}><Pagination currentPage={atualPagina} pagina={setAtualPagina} UltimaPag={totalPagina}/></div>:null}
            </div>
        )
    } else {
        return (
            <div>
                <div className="ListaContainer">
                    <h1>Carregando</h1>
                    <LoaderSymbol/>
                </div>
            </div>  
        )
    }
}