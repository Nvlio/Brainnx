"use client"

import { type } from "os";
import { useState } from "react";

type QuadroImgProps = {
    images: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
};
export default function QuadroImg({ images, setImages }: QuadroImgProps) {

    const quadroStyle = {
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        width: "40%",
        margin: "2%",
        height: "18vh",
        cursor: "pointer",
        display: "flex",
        justifyItems: "center",
        textAlign: "center"
    }

    const ContainerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //funcao chamada ao clicar no elemento ele cria um input
        //passa todos os dados  do input. E entao ele chama uma
        //funcao evento que chama a funcao salvar arquivos.
        //e no fim ele faz um evento click()

        e.preventDefault();
        console.log("clicou")
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/*";
        input.multiple = true;

        input.onchange = (e: any) => {
            const files: FileList | null = e.target.files;
            if (files) {
                handleSaveFiles(files);
            }
        }

        input.click()
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        //funcao que impede a funcao padrao
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        //ele impede a funcao padrao ao mesmo tempo que chama a
        //funcao de arquivos

        e.preventDefault();
        handleSaveFiles(e.dataTransfer.files);
    }

    const handleSaveFiles = (files: FileList) => {
        //funcao que salva os arquivos na variavel
        console.log(files);
        setImages(prev => [...prev, ...Array.from(files)])
        console.log(images);
    }

    return (
        <div style={ContainerStyle}>
            <div
                style={quadroStyle}
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
            <p>Arraste ou click para adicionar suas fotos</p>
            </div>
        </div>
    )
}