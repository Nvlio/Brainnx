import Logo from "../Logo/Logo";
import "./Header.css"

// Contem o compoenente de menu superior, vai ter o componente logo
export default function MenuGeral() {

    return (
        <div className="HeaderMain">
            <div className="LogoArea">
                <Logo />
            </div>


        </div>
    )

}