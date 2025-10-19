

import ColetarUm from "../../../../../_ComponentesBasicos/DataBaseFunctions/ColetarUm";
import ContainerPage from "./Container";
import IMGPage from "./Imagem";

export default function Imgpage({ params }: { params: { id: string, idPost: string } }) {
    
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.9)", position: "fixed", display: "flex", justifyContent: "center", alignContent: "center", marginTop: "-70px", zIndex: "2" }}>
            <ContainerPage>
                <IMGPage idImagem={ params.idPost} />
            </ContainerPage>
        </div>
    )
}