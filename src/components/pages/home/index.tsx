import style from "./style.module.css"
import HeroSection from "./components/HeroSection"
import Facilities from "./components/Facilities"
import AboutUs from "./components/AboutUs"
import StudentStatistics from "./components/StudentStatistics"
import TeachersSection from "./components/TteachersSection"
import EventPage from "./components/EventPage"
import ImageGallery from "./components/ImageGallery"
import BlogAndArticle from "./components/BlogAndArticle"

export default function index(){
    return (
        <>
        <HeroSection/>
        <Facilities/>
        <AboutUs/>
        <StudentStatistics/>
        <TeachersSection/>
        <EventPage/>
        <ImageGallery/>
        <BlogAndArticle/>
        </>
    )
}