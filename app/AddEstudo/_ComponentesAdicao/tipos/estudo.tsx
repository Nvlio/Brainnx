export type estudo = {
    titulo: string,
    text: string,
    fotos: File[],
    videos: Array<{ link: string, titulo: string }>,
    tags: string[],
    Estudos: { anterior: number, posterior: number }
}