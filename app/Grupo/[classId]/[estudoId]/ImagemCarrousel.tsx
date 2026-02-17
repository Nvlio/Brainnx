"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

export default function CarroselImagem({ Imagens, idEstudo }: { Imagens: any[], idEstudo: number }) {

    const router = useRouter()
    const [index, setIndex] = useState(1)

    useEffect(() => {
        document.body.style.overflow=""
    }, [])

    return (
        <>
            <h2>Fotos</h2>
            <div style={{ width: "80%", height: "80vh", backgroundColor: "black", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                {Imagens.map((imagem: any, indexImg: number) => (
                    <Image onClick={() => { router.push(`/Estudo/${idEstudo}/Imagem/${imagem.id}`) }} key={indexImg + 1} style={{ cursor: "pointer", display: index == indexImg + 1 ? "block" : "none", width: "40%", height: "auto", objectFit: "cover" }} src={`/Fotos/Especificos/${imagem.nome}`} alt="olha que legal" width={10000} height={1000} />
                ))}
            </div>
            <br/>
            {Imagens.length > 1 ?
                <div className="btn-group" role="group" aria-label="Botoes do carrosel">
                    <button type="button" onClick={() => { setIndex(prev => prev == 1 ? 3 : prev  - 1) }} className="btn btn-primary">Anterior</button>
                    <button type="button" onClick={() => { setIndex(prev => (prev % 3) + 1) }} className="btn btn-primary">Posterior</button>
                </div>
                : null}
        </>
    )
}