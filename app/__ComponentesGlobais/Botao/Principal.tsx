"use client"
import { useRouter } from "next/navigation";
import "./Principal.css"


// botão de adição de classe ele é fixo no canto inferior esquerdo
export default function BotaoAdd({ Funcao }: { Funcao: string }) {

    const router = useRouter();

    const config = Funcao === "Estudo" ?
        {
            principal: "EstudoButton",
            secundario:{fontSize:"20px"},
            texto:"ADICIONAR"
        }
        :
        {
            principal: "ClasseButton",
            secundario:{fontSize:"50px"},
            texto:"+"
        }


    return (
        <button className={`PrincipalButton ${config.principal}`} onClick={() => { router.push("/AddEstudo") }}>
            <span style={config.secundario}>{config.texto}</span>
        </button>
    )

}