import { writeFile } from 'fs/promises';
import path from "path";

export async function POST(req) {

    let Right = true;

    const data = await req.formData();
    const files = await data.getAll("fotos");


    if (!files[0]) {
        return new Response(JSON.stringify({ message: "Erro sem arquivo passado" }), {status:500})
    };

    try {
        files.forEach(async (file) => {
            const bytes = await file.arrayBuffer(files);
            const buffer = Buffer.from(bytes);

            const filePath = path.join(process.cwd(), "public", "Fotos", "Especificos", file.name);
            await writeFile(filePath, buffer);
        })
    } catch (err) {
        Right = false;
    }
    if (!Right)return new Response(JSON.stringify({ message: "erro interno do servidor" }), { status: 500 });
    return new Response(JSON.stringify({ message: "Upload concluido" }), { status: 200 });
}