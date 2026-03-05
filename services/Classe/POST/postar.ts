import { prisma } from "@/app/lib/prisma";

export default async function NormalPost(titulo: string, idUsuario: string, visivel: boolean) {
    try {
        console.log(titulo,idUsuario,visivel)
        await prisma.classe.create({
            data: {
                nome: titulo,
                criador:{connect:{id:parseInt(idUsuario)}},
                visivel: visivel
            }
        })

        return { SucessMsg: "Assunto criado com sucesso!",status:200 }
    } catch (e: any) {
        return { ErrorMsg: "Algum Erro ocorreu ao criar o Assunto: " + e,status:500 }
    }
}