import FormEstrutura from "./_ComponentesAdicao/Estrutura";

export default function Main(){
    return(
        <div>
            <h1 className="TituloPrincipal">Adicionar estudo</h1>
            <hr/>
            <div style={{ margin: "5% 10%" }}>
                <FormEstrutura/>
            </div>
        </div>
    )
}