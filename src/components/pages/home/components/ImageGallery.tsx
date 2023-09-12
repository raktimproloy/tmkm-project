import Image from "next/image";
import PhotoGalleryPic from "@/../public/image/01.jpg";
import GreenBtn from "@/components/shared/greenButton";
export default function ImageGallery() {
    return (
        <>
        
        <div className="max-w-screen-xl m-auto my-10 mt-24 p-5">
            <h5 className="text-center text-xs">Photo Gallery</h5>
            <h1 className="text-center text-2xl font-semibold mb-10">Our Photo Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>           
             <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
        <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src={PhotoGalleryPic} alt=""/>
        </div>
    </div>
</div>

<div className="w-full flex justify-end">

  <GreenBtn text={'See More Photo'}/>

</div>
        </div>

        </>
    );
}