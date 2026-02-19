"use client"

import React, { useEffect, useState } from "react";


export default function ContainerPage({ children }: { children: React.ReactNode }) {


    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => { document.body.style.overflow = "" };
    }, [])

    return (
        <div style={{ display: "flex", width: "100%", padding:"1%" }}>
            <div style={{ width: "04%", fontSize:"30px" }}>X</div>
            <div style={{ width: "90%", justifyItems: "center" }}>
            {children}
            </div>
        </div>
    )

}