"use client"
import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import GoBackAnimatedBtn from "@/components/shared/goBackAnimatedBtn";
import SignForm from "./signupForm";
import SocialSignup from "./socialSignup";
import { useState } from "react";

export default function Signup() {
    return (
        <>
        <TextWithImagePlaceholder title={'Sign Up Now!'} routeTextWithBold={'Home'} routeTextWithGray={'signup'}/>
        <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="md:w-[550px] shadow p-5">

                <div>
                    <GoBackAnimatedBtn text="Go Home"/>
                </div>

                <div className="text-2xl font-semibold text-gray-800 text-center mt-10">Sign Up</div>
                <SignForm/>
                <SocialSignup/>
                
            </div>
            </div>
        </>
    );
}