import { prisma } from "@/app/lib/prisma";


export default async function GetAllEstudo(idAssunto: string) {
    try {
        const estudo = await prisma.estudo.findMany({ where: { estudoClassId: parseFloat(idAssunto) } })
        return estudo
    } catch (e: any) {
        return { ErrorMsg: "ao Buscar os dados" + e }
    }

}