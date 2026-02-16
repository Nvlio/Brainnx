
import GetAll from "@/services/Geral/GetAll";
// api para pegar dados gerais pode ser usado por diferentes tipos de dados.

export async function GET(req:any){
    try{
        const dados:any = await GET(req);
        return new Response(JSON.stringify(dados),{status:200})
    }catch(error:any){
        return new Response(JSON.stringify({ErrorMessage:error.message}),{status:500})
    }
    
}