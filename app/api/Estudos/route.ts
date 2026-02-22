import Get from "@/services/Estudos/GET/Control";

export async function GET(req: any) {
    const url = new URL(req.url);
    const idAssunto = url.searchParams.get("s")
    const idEstudo = url.searchParams.get("e")
    const detail:string|null = url.searchParams.get("d")
    try {
        if (idAssunto === null) return new Response(JSON.stringify({ErrorMessage:"Nenhum assunto especificado"}),{status:400})
        const estudos = await Get(idAssunto,idEstudo,detail===null?"Complete":"Simple")
        console.log(estudos)
        if (typeof estudos === "string") throw new Error(estudos)
        return new Response(JSON.stringify(estudos), { status: 200 })
    } catch (e) {
        return new Response(JSON.stringify({ ErrorMessage: `Ocorreu um erro:${e}`}), { status: 500 })
    }
}