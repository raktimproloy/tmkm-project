import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";

export default function AdmissionPage() {
    return (
        <>
        <TextWithImagePlaceholder title="Online Admisison System" routeTextWithBold="Home" routeTextWithGray="Admission"/>

        <div className="max-w-screen-xl p-3 md:p-7 m-auto bg-green-50 rounded">
            <div className="w-full h-full">
                <h1 className="text-gray-700 font-bold text-2xl md:text-3xl text-center my-5 md:my-0">Select Your Appropriate Type</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


                    <div className="w-full h-full bg-white rounded">
                    <div className="hover:border hover:border-green-500 rounded transition-all duration-200">
                            <div className="flex flex-row justify-between items-center m-5">
                                <div className="p-2 bg-yellow-50 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-16 h-16 text-yellow-300" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                                </div>
                                <button className="bg-green-500 rounded hover:bg-green-600 text-white w-fit h-fit px-3 py-2">
                                    Admisison Now! 
                                </button>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="text-gray-700 font-semibold text-xl">
                                   New Student
                                </div>
                                <div className="mt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full bg-white rounded">
                    <div className="hover:border hover:border-green-500 rounded transition-all duration-200">
                            <div className="flex flex-row justify-between items-center m-5">
                                <div className="p-2 bg-yellow-50 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-16 h-16 text-yellow-300" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                                </div>
                                <button className="bg-green-500 rounded hover:bg-green-600 text-white w-fit h-fit px-3 py-2">
                                    Admisison Now! 
                                </button>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="text-gray-700 font-semibold text-xl">
                                   New Student
                                </div>
                                <div className="mt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full bg-white rounded">
                    <div className="hover:border hover:border-green-500 rounded transition-all duration-200">
                            <div className="flex flex-row justify-between items-center m-5">
                                <div className="p-2 bg-yellow-50 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-16 h-16 text-yellow-300" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                                </div>
                                <button className="bg-green-500 rounded hover:bg-green-600 text-white w-fit h-fit px-3 py-2">
                                    Admisison Now! 
                                </button>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="text-gray-700 font-semibold text-xl">
                                   New Student
                                </div>
                                <div className="mt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </>
    );
}