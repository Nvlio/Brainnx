"use client"

import { useState } from "react"

export default function InputForm({ label, placeholder, dado,status }: { label: string, placeholder: string, dado: Function,status:Function }) {


    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <div className="input-group">
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={placeholder} 
                    onChange={(e)=>{dado(e.target.value);e.target.value===""?status("incompleto"):status("completo")}}
                    />

            </div>
            {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
        </div>
    )
}