"use client"

import { useEffect, useState } from "react";
import "./ListaEstudos.css"
import { useParams } from "next/navigation";
import Link from "next/link";



// compoenente de lista
export default function ListaEstudos() {
    const [estudos, setEstudos] = useState()
    const [status,setStatus] = useState("Ocioso")
    const params = useParams()
    async function getEstudo() {
        const data = await fetch(`/api/Estudos?s=${params.classId}`)
        setEstudos(await data.json())
        setStatus("Ocioso")
    }

    useEffect(() => {
        setStatus("Carregando")
        getEstudo()
    }, [])

    useEffect(() => {
        console.log(estudos)
    }, [estudos])

    if (status==="Ocioso") {
        return (
            <div className="EstudoLista">
                {estudos ?
                    <ul className="list-group contentItems">
                        {estudos?.map((estudo: any) => {
                            return (<Link key={estudo.id} href={`${params.classId}/${estudo.id}`}><li className="list-group-item">{estudo.titulo}</li></Link>)
                        })}
                    </ul>
                    :
                    <div className="NoContent">
                        <h1>Não tem conteudo ainda</h1>
                    </div>
                }
            </div>
        )
    } else {
        return (
            <div className="NoContent">
                <h1>Carregando</h1>
            </div>
        )
    }
}