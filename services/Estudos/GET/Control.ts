import GetAllEstudo from "./GetAllEstudo";
import GETSome from "./GetAFew";
import GetShort from "./GetSummarize";
import { error } from "console";


export default async function Get(idAssunto: string | null, idEstudo: string | null, details: "Complete" | "Simple") {
    try {
        let estudo;
        if (idAssunto) {
            estudo = await GetAllEstudo(idAssunto)
        } else if (idEstudo) {
            if (details === "Complete") {
                estudo = await GETSome(idEstudo)
            } else {
                estudo = await GetShort(idEstudo)
            }
        } else {
            return { ErrorMsg: "Requisição Errada" }
        }
        return estudo
    } catch (e: any) {
        return { ErrorMsg: "ao Buscar os dados" + e }
    }

}