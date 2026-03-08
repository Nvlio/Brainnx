"use client"

import Link from "next/link"
import { useState } from "react"

export default function Pagination({ currentPage, pagina, UltimaPag }: { currentPage: number, pagina: Function, UltimaPag: number }) {

    console.log(currentPage,UltimaPag)

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <Link className="page-link" href={`?${currentPage - 1}`} scroll={false} onClick={() => { pagina(currentPage - 1) }}>Previous</Link>
                </li>
                {currentPage > 1 ?
                    <Link className="page-link" href="?1" scroll={false} onClick={() => { pagina(1); }} >1</Link>
                    : null}
                <li className="page-item">
                    <Link className="page-link active" href={`?${currentPage}`} scroll={false}> {currentPage} </Link>
                </li>
                {currentPage < UltimaPag ? <li className="page-item"><Link className="page-link" href={`?${UltimaPag}`} scroll={false} onClick={() => { pagina(UltimaPag) }}>{UltimaPag}</Link></li>
                    : null}
                <li className="page-item">
                    <Link className={`page-link ${currentPage === UltimaPag ? "disabled" : ""}`} href={`?${currentPage + 1}`} scroll={false} onClick={() => { pagina(currentPage + 1) }}>Next</Link>
                </li>
            </ul>
        </nav>
    )
}