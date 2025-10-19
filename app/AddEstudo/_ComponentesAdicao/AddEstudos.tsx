"use client"

import React, { useEffect, useState } from "react"
import { estudo } from "./tipos/estudo";
import { GET } from "../../_ComponentesBasicos/DataBaseFunctions/GET";

type funcao = {
    estudos: { anterior: number, posterior: number };
    setEstudos: React.Dispatch<React.SetStateAction<estudo>>;

};
export default function TagsEstudos({ estudos, setEstudos }: funcao) {
    const [estudo, setEstudo] = useState<any[]>()





    const Getestudos = async () => {
        //pega dados de estudo
        const estudos = await GET("estudo")
        setEstudo(estudos.dados)

    }

    useEffect(() => {
        //ao renderizar ele verifica se estudo existe
        //caso nao tenha ele chama a funcao

        if (estudo == undefined) {
            Getestudos()
        }
        console.log(estudos)

    }, [])

    useEffect(() => {
    }, [estudo])





    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "center", flexWrap: "wrap" }}>

            <div style={{ width: "100%", display: "flex" }}>
                <label style={{ width: "50%" }}>Estudo anterior:</label>
                <label style={{ width: "50%" }}>Estudo posterior:</label>

            </div>

            <div style={{ width: "100%" }}>
                <select
                    onChange={(e) => { setEstudos((prev) => ({ ...prev!, Estudos: { posterior: prev.Estudos.posterior, anterior: Number(e.target.value) } })); console.log(estudos) }}
                    style={{
                        width: "50%",
                        border: "1px solid black",
                        textAlign: "center",
                        backgroundColor: "white",
                        color: "black",
                        height: "7vh",
                        borderRadius: "10px"
                    }}
                    id="antes"
                    name="antes">

                    <option value="nenhum">Nenhum</option>
                    {estudo?.map((item) => (
                        <option key={item.titulo} disabled={item.id >= estudos.posterior && estudos.posterior != 0} value={item.id}>{item.titulo}</option>

                    ))}
                </select>

                <select
                    onChange={(e) => { setEstudos((prev) => ({ ...prev!, Estudos: { anterior: prev.Estudos.anterior, posterior: Number(e.target.value) } })); console.log(estudos) }}
                    style={{
                        width: "50%",
                        border: "1px solid black",
                        textAlign: "center",
                        backgroundColor: "white",
                        color: "black",
                        height: "7vh",
                        borderRadius: "10px"
                    }}
                    id="depois"
                    name="depois">

                    <option value="nenhum">Nenhum</option>
                    {estudo?.map((item) => (

                        <option key={item.titulo} disabled={item.id <= estudos.anterior} value={item.id}>{item.titulo}</option>


                    ))}
                </select>
            </div>


        </div>
    )
}