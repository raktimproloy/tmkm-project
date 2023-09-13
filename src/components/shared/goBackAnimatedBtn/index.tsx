interface Props{
    text: string
}


export default function GoBackAnimatedBtn({text}: Props) {
    return (
        <>
                <button className="w-fit h-fit px-5 py-1 md:py-2 rounded border border-green-500 text-green-600 hover:scale-110 transition-transform">
                <div className="flex justify-center items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5 h-5" fill="currentColor">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                    <span>{text}</span>
                </div>
                </button>
        </>
    );
}