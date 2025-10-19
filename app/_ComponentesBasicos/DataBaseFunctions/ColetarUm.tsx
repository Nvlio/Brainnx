import { prisma } from "../../lib/prisma";

export default async function ColetarUm(tipo: string, parametro?: string) {
    let dados;

    if (tipo === "estudo") {
        dados = await prisma.estudo.findUnique({
            where: {
                id: Number(parametro),
            },
            include: {
                fotos: { select: { nome: true, id: true } },
                videos: { select: { titulo: true, url: true } },
                tags: {
                    select: { tag: { select: { nome: true } } }
                },
                anterior: { select: { id: true } },
                posterior: { select: { id: true } }
            }
        })
        //pega apenas um estudo especifico junto de suas fotos
    } else if (tipo === "estudoSimples") {
        dados = await prisma.estudo.findUnique({ where: { id: Number(parametro) }, include: { fotos: { take: 1, select: { nome: true } } } })
    }
    else if (tipo = "imagem") {
        dados = await prisma.foto.findUnique({ where: { id: Number(parametro) } })
    }
    else {
        return { dados: [], error: "Tipo nao permitido apenas para estudo" }
    }

    return {dados,error:null}

}