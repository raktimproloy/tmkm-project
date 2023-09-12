import Image from "next/image";
import HeroSectionImage from "@/../public/image/heroSection.jpeg";

export default function HeroSection() {
    return(
        <>
      <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">A Reliable Islam Centre Follow 
            <span className="text-green-600"> The Quran And Sunnah</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-green-600 border border-green-300 rounded-lg hover:bg-green-700 focus:green-4 focus:ring-green-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white">
                Get Admission
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image width={500} height={500} src={HeroSectionImage} className="rounded" alt="mockup"/>
        </div>                
    </div>
</section>



        </>
    );
}