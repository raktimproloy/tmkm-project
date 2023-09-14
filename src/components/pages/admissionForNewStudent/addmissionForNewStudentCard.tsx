interface Props{
    serial: string,
    serialBottomText: string,
    details: string
}
export default function AdmissionForNewUser({serial,serialBottomText,details}: Props) {
    return (
        <>
                            <div className="w-full h-full bg-white rounded">
                    <div className="hover:border hover:border-green-500 rounded transition-all duration-200">
                            <div className="flex flex-row justify-between items-center m-5">
                                <div className="flex flex-col">
                                    <span className="text-gray-700 font-semibold  bg-yellow-400 rounded px-5 py-2">
                                        {serial}
                                    </span>
                                    
                                    <div className="bg-yellow-100 px-5 rounded">
                                        {serialBottomText}
                                    </div>

                                </div>
                                <button className="bg-green-500 rounded hover:bg-green-600 text-white w-fit h-fit px-3 py-2">
                                    Admisison Now! 
                                </button>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="text-gray-700 font-semibold text-md">
                                   {details}
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}