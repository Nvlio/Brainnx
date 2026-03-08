import { prisma } from "@/app/lib/prisma";



export default async function GetSome(extra:boolean,page:number) {

    console.log(extra)
    try {
        const data = await prisma.classe.findMany({where:{visivel:extra},skip:(page-1)*12,take:12});
        const total = await prisma.classe.count({where:{visivel:extra}})
        return {data,total}
    } catch (error: any) {
        return { ErrorMsg: "Ocorreu um Erro ao Buscar Dados: " + error.message }
    }
}