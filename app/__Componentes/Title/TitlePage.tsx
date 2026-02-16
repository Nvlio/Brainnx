"use client"

import Link from "next/link"
import "../Title/TitlePage.css"
import { useState } from "react"


// Componente titulo da page
export default function TitlePage({extra}:{extra:(s:string)=>void}) {
    const [item,setItem] = useState("Seus")

    return (
        <div className="Container">
            <h1>Lista de Estudos</h1>
            <div className="TabEstudos">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className={`nav-link ${item==="Seus"?"active":""}`} href="?s=Seus" scroll={false} onClick={()=>{extra("Seus");setItem("Seus")}}>Seus Estudos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${item!="Seus"?"active":""}`}  href="?s=Outros" scroll={false} onClick={()=>{extra("Outros");setItem("Outros")}}>Estudos Onlines</Link>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    )
}