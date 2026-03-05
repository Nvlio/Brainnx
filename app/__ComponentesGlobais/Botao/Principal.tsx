"use client"
import { useRouter } from "next/navigation";
import "./Principal.css"


// botão de adição de classe ele é fixo no canto inferior esquerdo
export default function BotaoAdd({ Funcao, path }: { Funcao: string, path: string }) {

    const router = useRouter();

    const config = Funcao === "Estudo" ?
        {
            principal: "EstudoButton",
            secundario: { fontSize: "20px" },
            texto: "ADICIONAR"
        }
        :
        {
            principal: "ClasseButton",
            secundario: { fontSize: "50px" },
            texto: "+"
        }


    return (
        <button className={`PrincipalButton ${config.principal}`} onClick={() => { router.push(path) }}>
            <span id="ButtonAddEstudo" style={config.secundario}>{config.texto}</span>
        </button>
    )

}