import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder"; 
export default function index() { 
    return(
         <>
            <TextWithImagePlaceholder title={'Access your account now!'} routeTextWithBold={'Home'} routeTextWithGray={'login'} />
            <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="md:w-96 shadow p-5">
                <button className="w-fit h-fit px-5 py-1 md:py-2 rounded border border-green-500 text-green-600 hover:scale-110 transition-transform">
                <div className="flex justify-center items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5 h-5" fill="currentColor">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                    <span>Go back</span>
                </div>
                </button>
                <div className="text-2xl font-semibold text-gray-800 text-center mt-10">Login To Your Account</div>
                <form className="mt-5 md:mt-10">
                <div className="mb-6">
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 " placeholder="Teacher's Email" required />
                </div>
                <div className="mb-6">
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="Teacher's Password" required />
                </div>
                <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login Now</button>
                </form>
            </div>
            </div>
  </> 
  );
 }