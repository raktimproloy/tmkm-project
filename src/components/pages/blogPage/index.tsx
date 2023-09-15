import BlogPageCard from "./blogPageCard";
import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import Pagination from "@/components/shared/pagination";

export default function BlogPage() {
    return (
        <>
        <TextWithImagePlaceholder title="Blog Page" routeTextWithBold="Home" routeTextWithGray="blog-page"/>

            <div>
            <div className="m-5 flex justify-center items-center">
            <div className="max-w-screen-xl p-20 m-auto">
                <h5 className="text-xs font-semibold text-center">Blog and Article</h5>
                <h5 className="text-xl md:text-2xl mt-3 mb-5 font-semibold text-center">Latest Blog and Article</h5>

                <div className="grid md:grid-cols-3 gap-5">
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                    <BlogPageCard/>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center mb-10">
            
        <Pagination/>
        </div>
            </div>

        
        </>
    );
}