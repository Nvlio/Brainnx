import GetSome from "@/services/Classe/GetSome";

// api mais especifica para pegar dados da classe, tendo parametros especificos apenas dela

export async function GET(req: any) {
    const url = new URL(req.url);
    const raw: any = url.searchParams.get("s")
    const extra = raw ==="Seus"?false:true
    try {
        const dados = await GetSome(extra);
        console.log(dados)
        return new Response(JSON.stringify(dados), { status: 200 })
    } catch (error: any) {
        console.log("ss")
        return new Response(JSON.stringify({ ErrorMessage: error.message }), { status: 500 })
    }
}