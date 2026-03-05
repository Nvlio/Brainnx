"use client"

import { useEffect, useState } from "react";
import FormContainer from "./__Componentes/ContainerForm/page";
import InputForm from "./__Componentes/Input/page";
import SubmitButton from "./__Componentes/Share/page";
import { useRouter } from "next/navigation";
import ShareButton from "./__Componentes/Share/page";



export default function AddAssunto() {

    const path = useRouter()
    const [valor, setValor] = useState({titulo:"",publico:false,idCriador:"1"})
    const [status, setStatus] = useState("incompleto")

    const handleSubmit = async () => {
        if (status === "incompleto") {
            alert("Campo(s) vazio(s)")
        } else {
            const resp = await fetch("/api/Classes", {
                method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({
                    titulo: valor.titulo,
                    publico:valor.publico,
                    idCriador:valor.idCriador
                })
            })
            if(resp.status!==200){
                alert(await resp.json())
            }else{
                alert(await resp.json())
                path.push("/Assuntos")
            }
        }
    }


    return (
        <FormContainer heightEXT="auto">
            <section>
                <h1>Novo Assunto</h1>
                <p>Adicione um novo assunto ao sistema</p>
                <hr />
            </section>
            <section>
                <InputForm label="Titulo do Assunto" placeholder="Novo Assunto" status={setStatus} dado={(novoValor: string) => { setValor(prev => ({ ...prev, titulo: novoValor })) }} />
                <ShareButton texto="Tornar Publico?" publico={()=>{setValor(prev=>({...prev,publico:!prev.publico}))}}/>
            </section>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Adicionar Assunto</button>
        </FormContainer>
    )
}