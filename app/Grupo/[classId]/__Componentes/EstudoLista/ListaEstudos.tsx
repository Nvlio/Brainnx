
import "./ListaEstudos.css"

const List=false;


// compoenente de lista
export default function ListaEstudos(){
    return(
        <div className="EstudoLista">
            {List?
            <h1>
                
            </h1>
            :
            <div className="NoContent">
                <h1>Não tem conteudo ainda</h1>
            </div>
            }
        </div>
    )
}