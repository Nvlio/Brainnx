"use client"
import { useRouter } from "next/navigation";
export default function BotaoAdd() {

    const router = useRouter();

    const ButtonStyle = {
        backgroundColor: "blue",
        color: "white",
        borderRadius: "100px",
        display: "flex",
        width: "4.9%",
        height: "10vh",
        position: "fixed",
        zIndex: "1",
        cursor: "pointer",
        bottom: "32px",
        left: "32px",
        alignItems: "center",
        justifyContent: "center",
        fontSize:"1.5em"
    }

    return (
        <button onClick={() => { router.push("/AddEstudo") }} style={ButtonStyle}>
            <h1>+</h1>
        </button>
    )

}