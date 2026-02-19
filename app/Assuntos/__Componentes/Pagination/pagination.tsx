"use client"

import Link from "next/link"
import { useState } from "react"

export default function Pagination() {

    const [currentPage, setCurrentPage] = useState(1)

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <Link className="page-link" href={`?${currentPage - 1}`} scroll={false} onClick={() => { setCurrentPage(currentPage - 1) }}>Previous</Link>
                </li>
                {currentPage > 1 ?
                    <Link className="page-link" href="?1" scroll={false}>1</Link>
                    : null}
                <li className="page-item">
                    <Link className="page-link active" href={`?${currentPage}`} scroll ={false}> {currentPage} </Link>
                </li>
                <li className="page-item"><a className="page-link" href="?3" onClick={()=>{setCurrentPage(3)}}>3</a></li>
                {/* mudar depois para que ele seja o numero final da lista */}
                <li className="page-item">
                    <Link className={`page-link ${currentPage === 3? "disabled":""}`} href={`?${currentPage + 1}`} scroll={false} onClick={()=>{setCurrentPage(currentPage+1)}}>Next</Link>
                </li>
            </ul>
        </nav>
    )
}