import Image from "next/image";
import BlogThumbnail from "@/../public/image/image-1.jpg";
import GreenBtn from "@/components/shared/greenButton";

export default function BlogAndArticle() { return ( <>
    <div className="max-w-screen-xl m-auto mt-16 my-10 p-5">
      <h5 className="text-center text-xs"> Blog And Article </h5>
      <h1 className="text-2xl text-center">Latest Blog And Article</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="max-w-sm bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image className="rounded-t-lg" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
          </a>
          <div className="p-5">
            <a href="#" className="hover:text-green-500 w-fit">
              <h5 className="mb-2 text-xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
            </a>
            <div className="flex space-x-1 text-xs text-gray-600 mt-3">
                <span>By TMKM</span>
                <span>|</span>
                <span>11-09-2023</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
          <Image className="rounded-t-lg" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
          </a>
          <div className="p-5">
            <a href="#" className="hover:text-green-500 w-fit">
              <h5 className="mb-2 text-xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
            </a>
            <div className="flex space-x-1 text-xs text-gray-600 mt-3">
                <span>By TMKM</span>
                <span>|</span>
                <span>11-09-2023</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
          <Image className="rounded-t-lg" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
          </a>
          <div className="p-5">
            <a href="#" className="hover:text-green-500 w-fit">
              <h5 className="mb-2 text-xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
            </a>
            <div className="flex space-x-1 text-xs text-gray-600 mt-3">
                <span>By TMKM</span>
                <span>|</span>
                <span>11-09-2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
  
  <GreenBtn text={'See more'}/>

</div>
    </div>
  </> ); }