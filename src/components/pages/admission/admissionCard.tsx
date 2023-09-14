interface Props{
    svgIcon: string,
    title: string,
    description: string
}

export default function AdmissionCard({svgIcon,title,description}: Props){
    return (
        <>
                                    <div className="hover:border hover:border-green-500 rounded transition-all duration-200">
                            <div className="flex flex-row justify-between items-center m-5">
                                <div className="p-2 bg-yellow-50 rounded">
                                    {svgIcon}
                                </div>
                                <button className="bg-green-500 rounded hover:bg-green-600 text-white w-fit h-fit px-3 py-2">
                                    Admisison Now! 
                                </button>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="text-gray-700 font-semibold text-xl">
                                    {title}
                                </div>
                                <div className="mt-1">
                                    {description}
                                </div>
                            </div>
                        </div>
        </>
    );
}