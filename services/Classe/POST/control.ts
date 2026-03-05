import NormalPost from "./postar";


export default async function ControlPost(titulo: string, idUsuario: string, visivel: boolean) {
    const resposta = await NormalPost(titulo, idUsuario, visivel)
    return resposta
}