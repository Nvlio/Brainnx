import ColetarUm from "../../_ComponentesBasicos/DataBaseFunctions/ColetarUm"
import CarroselImagem from "./ImagemCarrousel";





export default async function EstudoPage({ params }: { params: { id: string } }) {

    const id = await params.id;
    const { dados, error } = await ColetarUm("estudo", params.id);
    console.log(dados)
    const dadosAnterior = dados.anterior ? await ColetarUm("estudoSimples", dados.anterior.id) : null
    const dadosPosterior = dados.posterior ? await ColetarUm("estudoSimples", dados.posterior.id) : null;



    return (
        <div style={{ backgroundColor: "DBDBDB", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>{dados.titulo}</h1>
            <hr style={{ border: "1px solid black", width: '90%' }} />
            <br />
            <div style={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "white", width: "80%", height: '100%' }}>
                <p>{ dados.corpo}</p>
            </div>
            <br />
            <CarroselImagem Imagens={dados?.fotos} idEstudo={id }/>
            
        </div>
)
}