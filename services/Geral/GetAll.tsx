import { prisma } from "@/app/lib/prisma";

const FindManyMap = {
    usuario: () => prisma.usuario.findMany(),
    estudo: () => prisma.estudo.findMany(),
    classe: () => prisma.classe.findMany(),
}

type ModelName = keyof typeof FindManyMap;

export default async function GetAll(tabela: ModelName) {
    try {
        const data = await FindManyMap[tabela]();
        console.log(data,"d");
        return data
    } catch (error: any) {
        return { ErrorMsg: "Ocorreu um Erro ao Buscar Dados: " + error.message }
    }
}