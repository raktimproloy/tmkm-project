import TextWithImagePlaceholder from '@/components/shared/textWithImagePlaceholder';
import Image from "next/image";
import BlogThumbnail from "@/../public/image/image-1.jpg";
import BlogPageCard from '../blogPage/blogPageCard';

export default function BlogDetails() {
    return (
        <>
            <TextWithImagePlaceholder title="Blog Details" routeTextWithBold="Home" routeTextWithGray="blog-page/blog-details"/>

            <div className='m-5'>
                <div className='max-w-screen-xl m-auto'>
                    <Image className="rounded w-full h-96 md:h-[550px] object-cover" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
                    <div className='py-5'>
                        <h1 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasro, dicta nobis.</h1>
                        <div className='flex justify-start items-center my-5'>
                            <div>
                             <Image className="w-10 h-10 rounded-full object-cover" width={500} height={500} src={BlogThumbnail} alt="bog_thumbnail" />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <span className='text-gray-700'>BY TMKM</span>
                                <span className='text-gray-700'>16 Sept 2023</span>
                            </div>
                        </div>

                        <div className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!sit amet consectetur adipisicing elit. Nemo quis ut tenetur perferendis! Esse nostrum atque dolorum similique, impedit nulla repellendus fuga labore, nobis eos deleniti numquam iste delectus dolorem!
                        </div>
                    </div>

                    <div className='my-10'>
                        <h5 className='text-xs font-semibold'>Blog and Articles</h5>
                        <h1 className='text-xl md:text-3xl font-semibold'>Related Blog</h1>
                        <div className='flex items-center'>
                        <div className='grid md:grid-cols-4 gap-5 my-5'>
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
                </div>
            </div>
        </>
    );
}