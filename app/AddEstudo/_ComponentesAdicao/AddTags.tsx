"use client"

import React, { useEffect, useState } from "react"
import estudo from "./tipos/estudo";
import { GET } from "../../_ComponentesBasicos/DataBaseFunctions/GET";

type funcao = {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<estudo>>;

};
export default function TagsAdd({ tags, setTags }: funcao) {
    const [inputTag, setInputTag] = useState<string>(""); //vai armazenar o que esta escrito no input
    const [TagsLista, setTagsLista] = useState<any[]>([]) //vai armazenar e permitir modificacao da lista de estudos da pagina estrutura

    const handleAddTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //a funcao vai verificar se o botao que o usuario clicou foi enter caso positivo ele adiciona"
        if (e.key === "Enter" && inputTag.trim() !== "" && tags.length < 10) {
            setTags((prev: estudo) => ({ ...prev, tags: [...prev.tags, inputTag.trim()] }));
            setInputTag("");
        } else if (e.key === "Enter" && tags.length >= 10) {
            alert("Passou do limite de tags");
            return;
        } else {
            return
        }
    }

    const Gettags = async () => {
        //vai pegar as tags do banco de dados
        const tagsDB = await GET("tag")
        setTagsLista(tagsDB.dados)
    }

    useEffect(() => {
        //ao renderizar a pagina ele vai chamar a funcao Gettags
        Gettags()

    }, [])

    useEffect(() => {
        //so imprime TagsLista a cada mudanca nela
        console.log(TagsLista)
    }, [TagsLista])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //ao ocorrer uma mudanca no input ele registra
        setInputTag(e.target.value);
    }

    return (
        <div>
            <input
                className="inputStyle"
                list="listatags"
                placeholder="Tags relacionadas ao estudo"
                onKeyDown={(e) => { handleAddTags(e) }}
                onChange={(e) => { handleChange(e) }}
                value={inputTag}
            />
            <datalist id="listatags">
                {TagsLista?.map((tag, index) => (
                    <option key={index} value={tag.nome} />
                ))
                }
            </datalist>
            <hr />
            <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", flexWrap: "wrap" }}>
                {tags.map((tag, index) => (
                    <div className="tagsContainerStyle" key={index + "_" + tag}>
                        <p>{tag}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}