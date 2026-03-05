import React from "react";
import "./page.css"


export default function FormContainer({ children,heightEXT }: { children: React.ReactNode,heightEXT:string }) {
    return (
        <div style={{width:"100%",minHeight:heightEXT==="auto"?"90vh":"100vh",backgroundColor:"whitesmoke",padding:"10px",display:"flex",alignItems:"center"}}>
            <div className="ContainerForm" style={{height:heightEXT}}>
                {children}
            </div>
        </div>
    )
}