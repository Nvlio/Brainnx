"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import "./ListaClasse.css"
import Pagination from "../Pagination/pagination"

export default function ClasseLista({ extra }: { extra: string }) {

    const [dados, setDados] = useState([])


    // função que chama api para pegar dados da classe, tem um parametro via url que especifica se pega apenas os visiveis
    // ao usuario ou se pega todos os que forão compartilhados por outros usuarios.
    async function getData() {
        const resp = await fetch(`/api/Classes?s=${extra}`)
        setDados(await resp.json())
    }

    useEffect(() => {
        getData()
        console.log(extra)
    }, [extra])

    // componente de classes da pagina
    return (
        <div>
            <div className="ListaContainer">

                <div className="FlexDisplay">
                    {dados.map((item: any) => {
                        return (
                            <div className="card" style={{ width: "18rem", height: "10rem" }} key={item.id}>
                                <Link href={`/Grupo/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nome}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </Link>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div style={{justifyItems:"center",margin:"10px"}}><Pagination/></div>
        </div>
    )
}