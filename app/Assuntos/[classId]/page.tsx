import "./page.css"
import HeaderComp from "./__Componentes/Header/Header";
import BarComp from "./__Componentes/searchbar/searchBar";
import ListaEstudo from "./__Componentes/ListaContent/listaEstudo";
import BotaoAdd from "@/app/__ComponentesGlobais/Botao/Principal";



export default function Page({ params }: { params: { classId: string } }) {

    return (
        <div className="MainPage">
            <HeaderComp />
            <section>
                <BarComp />
                <ListaEstudo />
            </section>
            <BotaoAdd Funcao={"Estudo"} path={`/Adicionar/${params.classId}`}/>
        </div>
    )
}