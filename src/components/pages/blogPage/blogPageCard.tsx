import Image from "next/image";
import BlogThumbnail from "@/../public/image/image-1.jpg";

export default function BlogPageCard() {
    return (
        <>
                        <div className="bg-white border w-72 p-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                    <Image className="rounded" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
                    </a>
                    <div className="py-3 px-1">
                        <a href="#" className="hover:text-green-500 w-fit">
                        <h5 className="mb-2 font-bold tracking-tight ">Noteworthy technology 2021</h5>
                        </a>
                        <div className="flex space-x-1 text-xs text-gray-600 mt-3">
                            <span>By TMKM</span>
                            <span>|</span>
                            <span>11-09-2023</span>
                        </div>
                    </div>
                </div>
        </>
    );
}