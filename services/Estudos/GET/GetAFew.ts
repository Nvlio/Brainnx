import { prisma } from "@/app/lib/prisma";


export default async function GETSome(idEstudo: string) {
    try {
        const estudo = await prisma.estudo.findUnique({
            where: { id: parseFloat(idEstudo) }, include: {
                fotos: { select: { nome: true, id: true } },
                videos: { select: { titulo: true, url: true } },
                tags: {
                    select: { tag: { select: { nome: true } } }
                },
                anterior: { select: { id: true } },
                posterior: { select: { id: true } }
            }
        })
        return estudo
    } catch (e: any) {
        return { ErrorMsg: "ao Buscar os dados" + e }
    }
}