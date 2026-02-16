import { prisma } from "@/app/lib/prisma";



export default async function GetSome(extra:Boolean) {

    console.log(extra)
    try {
        const data = await prisma.classe.findMany({where:{visivel:extra}});
        return data
    } catch (error: any) {
        return { ErrorMsg: "Ocorreu um Erro ao Buscar Dados: " + error.message }
    }
}