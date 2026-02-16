import ListaEstudos from "./__Componentes/EstudoLista/ListaEstudos";
import NavigatorLista from "./__Componentes/NavLista/NavLista";


export default function Page({params}:{params:{classId:string}}){
    
    return(
        <div>
            <NavigatorLista/>
            <ListaEstudos/>
        </div>
    )
}