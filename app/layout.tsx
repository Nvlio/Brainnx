


import type { Metadata } from "next";
import MenuGeral from "./__Componentes/Menus/Header";
import BotaoAdd from "./__Componentes/Botao/Principal";

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
                <MenuGeral />
                {children}
                <BotaoAdd />
            </body>
        </html>
    );
}
