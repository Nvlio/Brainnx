
import "./_Estilos/bootstrap.scss";
import "./_Estilos/General.css";
import "./_Estilos/Estrutural.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import MenuGeral from "./_ComponentesBasicos/Estruturas/HeaderBasico";
import BotaoAdd from "./_ComponentesBasicos/Estruturas/AdicionarButton";


export const metadata: Metadata = {
    title: "Brainnx",
    description: "site para estudo e memorizacao",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body style={{ backgroundColor: "white" }}>
                <MenuGeral/>
                {children}
                <BotaoAdd/>
            </body>
        </html>
    );
}
