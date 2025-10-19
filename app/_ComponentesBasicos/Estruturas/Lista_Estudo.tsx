
import "../../_Estilos/Estrutural.css";
import Image from "next/image"
import Link from "next/link"
import GetAllData from "../DataBaseFunctions/ColetarTudo";

type Estudo = {
    id: number,
    titulo: string,
    corpo: string,
    data: Date,
    tags: { estudoId: number, tagId: number, tag: { id: number, nome: string } }[]
    videos: { id: number, estudoId: number, url: string, titulo: string }[],
    fotos: { id: number, estudoId: number, nome: string }[]
};

const Container = { display: 'flex' }


export default async function ListaEstudos() {

    const { dados, erro } = await GetAllData("estudo") as { dados: Estudo[], erro: string | null };
    console.log(dados);

    if (erro) {
        <div>
            <h2>Erro:{erro}</h2>
        </div>
    }
    else if (dados.length > 0) {
        return (
            <div>
                {dados?.map((dado: Estudo, index) => (
                    <Link key={index} href={`/Estudo/${dado.id}`} className="listaEstilo" >
                        <Image src={`/Fotos/Especificos/${dado.fotos[0].nome}`} width={100} height={ 100} alt={`foto do estudo: ` + dado.fotos[0].nome} className="Imagem" />
                        <div style={{ height: "90%", border: "black 1px solid", width: '1px', margin: "10px 10px 0px 10px" }} />
                        <div style={{ width: "87%" }}>
                            <div>
                                <h1>{dado.titulo}</h1>
                                <p>{dado.corpo.length < 500 ? dado.corpo : dado.corpo.slice(0, 200) + " ..."}</p>
                                <h3 >{dado.data.toLocaleString("pt-BR")}</h3>
                                
                            </div>
                            <div style={Container}>
                                {dado.tags.slice(0,5).map((tagdata, ind) => (
                                    <div key={ind + tagdata.tag.nome}>
                                        <div key={ind} className="tagEstilo">
                                            {tagdata.tag.nome.length > 5 ? tagdata.tag.nome.slice(0, 4) + "..." : tagdata.tag.nome}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    } else {
        return (
            <div>
                <h2>Lista vazia</h2>
            </div>
        )
    }
}