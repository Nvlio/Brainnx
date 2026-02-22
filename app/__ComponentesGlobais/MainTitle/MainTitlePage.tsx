import Image from "next/image";
import "./MainTitlePage.css"
import { Oswald } from "next/font/google"
import { easeInOut, motion } from "framer-motion"

export const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-oswald"
})

export default function MainTitle() {
    return (
        <main>
            <section className="MainSection">
                <div className="BackgroundSlit" />
                <section className="ContainerTitle">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className={`${oswald.variable} reveal`}>
                        ESTUDE DO SEU JEITO <span className="MainText">BRAINNX</span>
                    </motion.h1>
                    <Image src={"/Images/Logo/Logo.png"} alt={"Logo"} height={10000} width={10000} priority />
                </section>
            </section>
        </main>
    )
}

