import { prisma } from "../../lib/prisma";

type configuration = {
    where: Record<string, any>,
    orderBy: Record<string, "asc" | "desc">,
    take: number,
    skip: number,
    include?: {
        fotos: { take: number, select: { nome: true } },
        tags: { take: number, select: { tag: { select: { nome: true } } } }
    }
}
//tipo para configuracao


export default async function GetAllData(tipo: string, config?: configuration) {
    console.log("sss")
    let dados;
    const defaultConfig: configuration = {
        where: {},
        orderBy: { data: "desc" },
        take: 20,
        skip: 0,
        include: {
            fotos: { take: 1, select: { nome: true } },
            tags: { take: 5, select: { tag: { select: { nome: true } } } }
        }
    }
    //configuracao padrao

    const finalConfig = { ...defaultConfig, ...config }
    //mistura as configuracoes padrao com as do usuario mantendo as alteracoes

    if (tipo == "estudo") {
        dados = await prisma.estudo.findMany(finalConfig)
    } else if (tipo == "tag") {
        const { include, ...confisemInclude } = finalConfig//retira include de final config

        dados = prisma.tag.findMany(confisemInclude)
    } else {
        return { dados: [], erro: "Tipo errado para a funcao (apenas:tag e estudo" }
    }

    return { dados, erro: null }
}