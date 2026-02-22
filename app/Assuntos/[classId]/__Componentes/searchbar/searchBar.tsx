import "./searchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function BarComp() {
    return (
        <div className="BarComp">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Pesquisar Estudo especifico" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary barButton" type="button">Pesquisar</button>
                </div>
            </div>
        </div>
    )
}