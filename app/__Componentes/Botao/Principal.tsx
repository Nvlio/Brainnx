"use client"
import { useRouter } from "next/navigation";
import "../Botao/Principal.css"

export default function BotaoAdd() {

    const router = useRouter();

    

    return (
        <button className="PrincipalButton" onClick={() => { router.push("/AddEstudo") }}>
            <span>+</span>
        </button>
    )

}