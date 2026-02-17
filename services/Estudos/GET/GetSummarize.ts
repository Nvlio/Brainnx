import { prisma } from "@/app/lib/prisma";


export default async function GetShort (idEstudo:string) {
    try{
        const estudo = await prisma.estudo.findUnique({where:{id:parseFloat(idEstudo)},select:{titulo:true,corpo:true}})
        return estudo;
    }catch(e:any){
        return {ErrorMsg:"Um erro ocorreu no banco de dados: "+ e}
    }
}