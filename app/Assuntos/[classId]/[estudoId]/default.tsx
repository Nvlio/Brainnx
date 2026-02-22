import Get from "@/services/Estudos/GET/Control";
import CarroselImagem from "./ImagemCarrousel";





export default async function EstudoPage({ params }: { params: { id: string } }) {

    const id = await params.id;
    const dados = await Get(null, params.id, "Complete");
    console.log(dados)

    if (!dados || Array.isArray(dados) || "ErrorMsg" in dados) {
        return <div>Erro ao carregar</div>;
    }

    const dadosAnterior = dados?.anteriorid ? await Get(null, dados?.anteriorid, "Simple") : null
    const dadosPosterior = dados?.posteriorid ? await Get(null, dados?.posteriorid, "Simple") : null;



    return (
        <div style={{ backgroundColor: "DBDBDB", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>{dados.titulo}</h1>
            <hr style={{ border: "1px solid black", width: '90%' }} />
            <br />
            <div style={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "white", width: "80%", height: '100%' }}>
                <p>{dados.corpo}</p>
            </div>
            <br />
            <CarroselImagem Imagens={dados?.fotos} idEstudo={id} />

        </div>
    )
}