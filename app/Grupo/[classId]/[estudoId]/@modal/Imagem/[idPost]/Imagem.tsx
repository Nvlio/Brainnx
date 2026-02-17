import ColetarUm from "../../../../../_ComponentesBasicos/DataBaseFunctions/ColetarUm";
import  Image  from "next/image";
export default async function IMGPage({ idImagem }: { idImagem: string }) {
    let foto;

    const getImagem = async () => {
        const { dados, error } = await ColetarUm("imagem", idImagem)
        console.log(dados);
        foto = dados.nome;
        return
    }

    await getImagem()
    console.log(`/Fotos/Especificos/${foto}`)

    return (
        <Image style={{ width: 'auto', height:"100vh" }} src={`/Fotos/Especificos/${foto}`} alt="Imagem do estudo" width={1000} height={1000} />
    )
}