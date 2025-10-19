"use server"

import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client/extension';
import { GET } from '../../../_ComponentesBasicos/DataBaseFunctions/GET';

const prisma = new PrismaClient();


type Data = {
    tipo: string;
    titulo: string | string[] | null;
    corpo: string | null;
    videos: Array<{ link: string, titulo: string }> | null;
    nomefoto: File[] | null;
    tagsnome: string[] | null;
    estudoNome: string | null;
    relacional: { anterior: number, posterior: number } | null
}
//e a interface de data para ser reutilizado depois.

const adicionarEstudo = async (data: Data) => {
    //funcao que vai adicionar um item de estudo no data base

    await prisma.estudo.create({
        data: {
            titulo: data.titulo as string,
            corpo: data.corpo as string,
            anterior: data.relacional?.anterior ? { connect: { id: data.relacional?.anterior } } : undefined,
            posterior: data.relacional?.posterior ? { connect: { id: data.relacional?.posterior } } : undefined,
            tags: {
                create: data.tagsnome?.map((nome) => ({
                    tag: {
                        connectOrCreate: {
                            where: { nome: nome },
                            create: { nome: nome },
                        },
                    },
                })),
            }
        },
    });

    return true;
}

const adicionarTag = async (data: Data) => {
    //funcao que adiciona a tag no data base
    //ele verifica se a tag ja existe na tabela
    //caso negativo ele adiciona no data base.

    const tag = await prisma.tag.findUnique({
        where: { nome: data.titulo }
    })
    console.log(tag)
    if (!tag) {
        await prisma.tag.create({
            data: {
                nome: data.titulo as string
            }
        })
    }

    return true;
}

const pegarEstudo = async (data: Data) => {
    //funcao que pega um estudo especifico pelo titulo

    const Estudo = await prisma.estudo.findUnique({
        where: { titulo: data.estudoNome }
    })
    console.log(Estudo)
    return Estudo;
}

export default async function Post(data: Data) {
    //funcao que faz o post principal, ele vai chamar funcoes secundarias
    //para resolver cada tipo especifico

    let resultado;

    if (data.tipo === "estudo") {
        resultado = await adicionarEstudo(data);

    } else if (data.tipo === "tag") {
        resultado = await adicionarTag(data);

    } else if (data.tipo === "video" && data.videos) {
        //nessas ultimas ele vai fazer uma adicao para cada video

        const estudo = await pegarEstudo(data);
        if (!estudo) return "Estudo nao encontrado";
        data.videos?.map(async (video) => {
            console.log(estudo, video);
            await prisma.video.create({
                data: {
                    url: video.link,
                    titulo: video.titulo,
                    estudoId: estudo.id
                }
            })
        })



    } else if (data.tipo === "foto") {
        //nessas ultimas ele vai fazer uma adicao para cada video


        const estudo = await pegarEstudo(data);
        if (!estudo) return "Estudo nao encontrado";
        data.nomefoto?.map(async (nomef) => {
            await prisma.foto.create({
                data: {
                    nome: nomef.name,
                    estudoId: estudo.id
                }
            })
        })

    } else {
        return "Tipo invalido";
    }


}