"use client"

import { CSSProperties, useEffect, useState } from "react";
import QuadroImg from "./quadroImg";
import estudo from "./tipos/estudo";

type funcao = {
    setImages: React.Dispatch<React.SetStateAction<estudo>>;

};

export default function PhotoSender({ setImages }: funcao) {

    const [photos, setPhotos] = useState<File[]>([]);

    const updatePhotos = () => {
        //funcao que atualiza estado de imagem da pagina estrutura 
        setImages((prev: estudo) => ({ ...prev, fotos: photos }));
    }

    useEffect(() => {
        //photos sendo atualizado ele atualiza fotos
        updatePhotos();
    }, [photos])


    return (
        <div>
            <QuadroImg images={photos} setImages={setPhotos} />
            <hr />
            {photos.length > 0 ?
                <div className="rowStyle">
                    {photos.map((photo, index) => (
                        <img
                            key={index + "_" + photo.name}
                            src={URL.createObjectURL(photo)}
                            alt={photo.name}
                        />
                    )) }
                </div>
                : null}
        </div>
    )
}