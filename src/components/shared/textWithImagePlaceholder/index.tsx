import React from "react";

interface Props{
    title: string,
    routeTextWithBold: string,
    routeTextWithGray: string
}

export default function TextWithImagePlaceholder({title,routeTextWithBold,routeTextWithGray}: Props) {
    return (
        <>

        <div className="relative w-full h-64 flex items-center justify-center">
            <img  src="https://i.ytimg.com/vi/XB5622Qtuik/maxresdefault.jpg" alt="Your Image" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-[#49a349] via-[#49a349d4] to-[#49a3499e]">
                <div className="text-xl font-semibold">
                    <h1 className="text-4xl text-white">{title}</h1>
                    <div className="bg-gray-300 rounded my-5 text-center">
                        <span className="text-gray-800">{routeTextWithBold}/<span className="text-gray-500">{routeTextWithGray}</span> </span>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}