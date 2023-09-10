import HeroSection from "./HeroSection"
import style from "./style.module.css"

export default function index(){
    return (
        <>
        <div className={`${style.homeColor}`}>Home Page</div>
        <HeroSection/>
        </>
    )
}