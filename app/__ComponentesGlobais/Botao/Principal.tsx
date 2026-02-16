"use client"
import { useRouter } from "next/navigation";
import "./Principal.css"


// botão de adição de classe ele é fixo no canto inferior esquerdo
export default function BotaoAdd() {

    const router = useRouter();

    

    return (
        <button className="PrincipalButton" onClick={() => { router.push("/AddEstudo") }}>
            <span>+</span>
        </button>
    )

}