"use client"

import { link } from "fs";
import React, { useEffect, useState } from "react";
import estudo from "./tipos/estudo";

type funcao = {
    videosurl: Array<{ link: string, titulo: string }>;
    setVideosurl: React.Dispatch<React.SetStateAction<estudo>>;

};
export default function AddUrlVideos({ videosurl, setVideosurl }: funcao) {
    const [inputUrl, setInputUrl] = useState<{ link: string, titulo: string }>({ link: "", titulo: "" })


    useEffect(() => {
    }, [videosurl])

    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>, tipo: string) => {
        if (tipo === "link") {
            setInputUrl({ ...inputUrl, link: e.target.value });
        } else {
            setInputUrl({ ...inputUrl, titulo: e.target.value });
        }
        //adiciona valores de link e titulo ao inputUrl
    }

    const handleSendUrl = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, video: { link: string, titulo: string }) => {
        e.preventDefault();
        console.log(video, videosurl);
        //Funcao que cancela o comportamente padrao

        if (video.link === "" || video.titulo === "") {
            alert("Esta faltando algo");
            return;
        }
        //caso link nao exista cancela a funcao

        setVideosurl((prev: estudo) => ({ ...prev, videos: [...prev.videos, video] }));
        //Adiciona o objeto de video ao array

        setInputUrl({ link: "", titulo: "" });
        //Limpa input
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <input
                    className="inputStyle"
                    placeholder="Adicionar Urls do video "
                    onChange={(e) => { handleInputchange(e, "link") }}
                    value={inputUrl.link}
                />
                <input
                    className="inputStyle"
                    placeholder="Adicionar o titulo do video."
                    onChange={(e) => { handleInputchange(e, "titulo") }}
                    value={inputUrl.titulo}
                />
            </div>

            <button
                className="buttonStyle"
                style={{ backgroundColor: "blue" }}
                onClick={(e) => { handleSendUrl(e, inputUrl) }}>
                Adicionar
            </button>
            <hr />
            <div
                style={{ maxHeight: "20vh", overflowY: "auto" }}
            >
                {videosurl.map((video, index) => (
                    <div className="videoContainerStyle" key={index + "_" + video.titulo}>
                        <p style={{ marginRight: "1%" }}>{video.titulo}</p>
                        <p>{video.link}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}