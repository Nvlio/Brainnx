"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function GET(tipo: string) {
    //funcao que faz a coleta de dados no data base

    let dados;
    if (tipo === "estudo") {
        //pega todos os dados de estudo assim como outras 
        //tabelas no banco de dado
        dados = await prisma.estudo.findMany({
            orderBy: {
                data: "desc"
            },
            include: {
                tags: { include:{ tag: true} },
                fotos: true,
                videos: true
            }
        });

    } else if (tipo === "tag") {
        //pega todas as tags

        dados = await prisma.tag.findMany();
    } else {
        return { dados: [], erro: "Tipo invalido" };
    }

    return { dados: dados, erro: null };
}

export {GET }