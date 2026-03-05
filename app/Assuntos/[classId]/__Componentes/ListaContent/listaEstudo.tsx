"use client"
import { useEffect, useState } from "react"
import "./listaEstudo.css"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ListaEstudo() {
    const [lista, setLista] = useState<any>([])
    const [status, setStatus] = useState("Ocioso")
    const params = useParams()
    const route = useRouter()

    const getEstudos = async () => {
        const dados = await (await fetch(`/api/Estudos?s=${params.classId}`)).json()
        setLista(await dados)
        setStatus("Ocioso")
        console.log(await dados)
    }

    useEffect(() => {
        setStatus("Carregando")
        getEstudos()
    }, [])

    if (status === "Ocioso") {
        return (
            <div className="ContainerDesktop">
                {lista.map((estudo: any) => {
                    return (
                        <div className="ListaContainerEstudo" key={estudo.id} onClick={()=>{route.push(`/Assuntos/${params.classId}/${estudo.id}`)}}>
                            <section id="primeiro"><Image src={"/Images/Logo/Logo.png"} alt="Imagem" height={100} width={100} /></section>
                            <section id="segundo">
                                <h3>{estudo.titulo}</h3>
                                <p>{estudo.corpo}</p>
                            </section>
                            <section id="terceiro" className="TimeSection">
                                <p>{new Date(estudo.data).toLocaleString("pt-br", {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                })}</p>
                            </section>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Carregando</h1>
            </div>
        )
    }
}