

import "bootstrap/dist/css/bootstrap.min.css"

import type { Metadata } from "next";
import MenuGeral from "./__ComponentesGlobais/Menus/Header";

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
            </body>
        </html>
    );
}

// layout principal da raiz do projeto aqui vai ter os componentes que vão permancecer em todas as paginas como menu superior e 
// botão de adição de classe, o children é o conteudo basico que é passado pelo parametro sendo a page da raiz do projeto.