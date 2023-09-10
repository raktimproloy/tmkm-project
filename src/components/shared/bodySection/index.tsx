import Facilities from "./facilities";
import AboutUs from "./aboutUs";
import StudentStatistics from "./studentStatistics";
import TeachersSection from "./teachersSection";
import EventPage from "./eventPage";
import ImageGallery from "./imageGallery";
import BlogAndArticle from "./blogAndArticle";

export default function BodySection() {
    return(
        <>
        <Facilities/>
        <AboutUs/>
        <StudentStatistics/>
        <TeachersSection/>
        <EventPage/>
        <ImageGallery/>
        <BlogAndArticle/>
        </>
    );
}