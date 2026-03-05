    import GetSome from "@/services/Classe/GetSome";
    import ControlPost from "@/services/Classe/POST/control";

    // api mais especifica para pegar dados da classe, tendo parametros especificos apenas dela

    export async function GET(req: any) {
        const url = new URL(req.url);
        const raw: any = url.searchParams.get("s")
        const extra = raw ==="Seus"?false:true

        try {
            const dados = await GetSome(extra);
            return new Response(JSON.stringify(dados), { status: 200 })
        } catch (error: any) {
            return new Response(JSON.stringify({ ErrorMessage: error.message }), { status: 500 })
        }
    }

    export async function POST(req:any){
        const body = await req.json()
        const titulo = body.titulo
        const publico = body.publico 
        const idCriador = body.idCriador    

        if(!titulo && !publico && !idCriador){
            return new Response(JSON.stringify({ErrorMessage:"Campos estão vazios"}),{status:400})
        }else{
            try{
                const resp = await ControlPost(titulo,idCriador,publico)
                if(resp.status!==200){throw new Error(resp.ErrorMsg)}
                return new Response(JSON.stringify(resp.SucessMsg),{status:200})
            }catch(error:any){
                return new Response(JSON.stringify({ErrorMessage:error.message}),{status:500})
            }
        }
    }