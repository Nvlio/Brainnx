import ColetarUm from "../../_ComponentesBasicos/DataBaseFunctions/ColetarUm"
import CarroselImagem from "./ImagemCarrousel";
import Image from "next/image";



interface Estudo {
    id?: number;
    titulo?: string;
    corpo?: string;
    data?: Date;
    anteriorid?: number | null;
    posteriorid?: number | null;
    anterior?: { id: number } | null;
    posterior?: { id: number } | null;
    fotos?: { id: number; nome: string }[];
    videos?: { id: number; titulo: string; url: string }[];
    tags?: { tag: { nome: string } }[];

}

export default async function EstudoPage({ params }: { params: { id: string } }) {

    const id = await params.id;
    const { dados, error } = await ColetarUm("estudo", params.id);
    console.log(dados)
    const dadosAnterior = dados?.anterior ? await ColetarUm("estudoSimples", dados.anterior.id) : null
    const dadosPosterior = dados?.posterior ? await ColetarUm("estudoSimples", dados.posterior.id) : null;
    console.log(dadosAnterior)



    if (!dados) {
        return (
            <div><h1>Nenhum dado encontrado</h1></div>
        )
    } else {
        return (
            <div style={{ backgroundColor: "DBDBDB", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1>{dados.titulo}</h1>
                <hr style={{ border: "1px solid black", width: '90%' }} />
                <br />
                <div style={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "white", width: "80%", height: '100%' }}>
                    <p>{dados.corpo}</p>
                </div>
                <br />
                <CarroselImagem Imagens={dados?.fotos} idEstudo={Number(id)} />
                <br /><hr />
                <div>
                    <h2>Videos</h2>
                    {dados?.videos.map((video, index: number) => (
                        <a key={index} href={video.url} target="_blank" >
                            <h3>{video.titulo}</h3>
                        </a>
                    ))}
                </div>
                <br />
                <h2>Estudos relacionados</h2>
                <div style={{ display: "flex" }} >
                    {dadosAnterior ?
                        <div>
                            <Image src={`/Fotos/Especificos/${dadosAnterior.dados.fotos[0].nome}`} alt="foto do estudo" width={100} height={100} />
                            <h2>{dadosAnterior.dados.titulo}</h2>
                            <p>{dadosAnterior.dados.corpo.split(0.10)}...</p>
                        </div>
                        : null}

                    {dadosPosterior ?
                        <div>
                            <Image src={`/Fotos/Especificos/${dadosPosterior.dados.fotos[0].nome}`} alt="foto do estudo" width={100} height={100} />
                            <h2>{dadosPosterior.dados.titulo}</h2>
                            <p>{dadosAnterior.dados.corpo.split(0.10)}...</p>
                        </div>
                        : null}
                </div>


            </div>
        )
    }
}