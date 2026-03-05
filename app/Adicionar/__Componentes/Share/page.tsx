"use client"

export default function ShareButton({texto,publico}:{texto:string,publico:Function}) {

    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={()=>{publico()}}/>
            <label className="custom-control-label" htmlFor="customCheck1">{texto}</label>
        </div>
    )
}