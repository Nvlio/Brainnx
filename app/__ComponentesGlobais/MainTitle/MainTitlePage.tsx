import Image from "next/image";
import "./MainTitlePage.css"
import {Oswald} from "next/font/google"

export const oswald =Oswald({
    subsets:["latin"],
    weight:["700"],
    variable:"--font-oswald"
})

export default function MainTitle() {
    return (
        <main>
            <section className="MainSection">
                <div className="BackgroundSlit" />
                <section className="ContainerTitle">
                    <h1 className={oswald.variable}>ESTUDE DO SEU JEITO <span>BRAINNX</span></h1>
                    <Image src={"/Images/Logo/Logo.png"} alt={"Logo"} height={10000} width={10000} priority />
                </section>
            </section>
        </main>
    )
}

