"use client"
import PhotosSender from "./FotosSend";
import AddUrlVideos from "./AddVideos";
import TagsAdd from "./AddTags";
import { estudo } from "./tipos/estudo";
import Post from "./DataBase/Adicionar";

import { useEffect, useState } from "react"
import TagsEstudos from "./AddEstudos";
import  {useRouter}  from "next/navigation"


export default function FormEstrutura() {
    const router = useRouter()

    
    const [estudos, setEstudos] = useState<estudo>({ titulo: "", text: "", fotos: [], videos: [], tags: [], Estudos: { anterior: 0, posterior: 0 }, })

    useEffect(() => {
        console.log(estudos.Estudos)
    }, [])

    const EnviarFoto = async () => {
        const formdata = new FormData();

        estudos.fotos.forEach((file) => {
            formdata.append("fotos",file)
        })

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formdata
        })

        const data = await res.json();

        console.log("resposta do servidor: ", data)

        if (res) {
            return true
        } else {
            return false
        }
    }

    const enviar = async () => {
        alert("Enviado");
        console.log(estudos.text);

        const resultado = await Promise.all([
            estudos.tags?.map(async (tag: string, ind: number) => {
                await Post({ tipo: "tag", titulo: tag, corpo: null, videos: null, nomefoto: null, tagsnome: null, estudoNome: null, relacional: null })
            })
        ]) || [];
        //cria uma variavel que vai armazenar o resultado da funcao enviar tags

        const fotos = estudos.fotos.length > 0 ? EnviarFoto() : true

        if (resultado && fotos) {
            //caso o resultado seja positivo ele salva os outros 
            //dados[estudo, video, foto]

            await Post({ tipo: "estudo", titulo: estudos.titulo, corpo: estudos.text, videos: null, nomefoto: null, tagsnome: estudos.tags, estudoNome: null, relacional: estudos.Estudos })
            await Post({ tipo: "video", titulo: null, corpo: null, videos: estudos.videos, nomefoto: null, tagsnome: null, estudoNome: estudos.titulo, relacional: null })
            await Post({ tipo: "foto", titulo: null, corpo: null, videos: null, nomefoto: estudos.fotos, tagsnome: null, estudoNome: estudos.titulo, relacional: null })
        }

        router.push("/")
    }





    return (
        <div className="containerForm">
            <input className="inputStyle" type="text" placeholder="Titulo do Estudo" onChange={(e) => { setEstudos((prev) => ({ ...prev, titulo: e.target.value })) }} />
            <textarea className="textAreaStyle" placeholder="Texto do Estudo" onChange={(e) => { setEstudos((prev) => ({ ...prev, text: e.target.value })) }} />
            <hr />
            <div>
                <PhotosSender setImages={setEstudos} />
            </div>
            <hr />
            <AddUrlVideos videosurl={estudos.videos} setVideosurl={setEstudos} />
            <hr />
            <TagsAdd tags={estudos.tags} setTags={setEstudos} />
            <hr />
            <TagsEstudos estudos={estudos.Estudos} setEstudos={setEstudos} />
            <br /><br />
            <button
                className="buttonStyle"
                style={{ backgroundColor: "green", marginLeft: "78%" }}
                onClick={(e) => { enviar() }}>
                Finalizar
            </button>
        </div>
    )
}