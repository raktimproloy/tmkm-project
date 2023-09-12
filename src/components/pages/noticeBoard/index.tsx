import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import Pagination from "@/components/shared/pagination";
export default function NoticeBoard() {
    return(
        <>
            <TextWithImagePlaceholder title={'Notice Board'} routeTextWithBold={'Home'} routeTextWithGray={'Notice Board'} />

        <div className="max-w-screen-xl m-auto my-10 bg-green-50 md:p-24 rounded">
            <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold text-center">Notice Board</h1>

            <div className="w-full mt-10">
                <div className="flex justify-between">
                    
                    <form className="flex items-center">   
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="Search...." required/>
                        </div>
                    </form>



                <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-green-500 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="13/09/2023"/>
                </div>

                </div>

                <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                    <div className="w-fit h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
                        <div className="flex flex-row justify-between">
                            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: 13/09/2023</div>
                            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
                        </div>
                        <div className="flex flex-col justify-start my-5">
                            <h1 className="text-base font-semibold">Details</h1>
                            <p className="text-gray-800 mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad sint nulla mollitia, nesciunt quod maiores natus nihil quo facilis pariatur velit officia rem sapiente sit tenetur magni inventore impedit.
                            </p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
                    </div>
                </div>
            </div>


                <div className="w-full flex justify-center items-center mt-10">
                <Pagination/>
                </div>
           
        </div>
        </>
    );
}