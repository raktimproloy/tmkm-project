'use client'
import InputField from "@/components/shared/inputField";
import GoBackAnimatedBtn from "@/components/shared/goBackAnimatedBtn";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
export default function CreateNotice() {

    const [showSpinner, setShowSpinner] = useState(false);
    const [token, setToken] = useState<undefined | string>()

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date()
    const postedTime = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`


    const [noticeData, setNoticeData] = useState({
        postedTime:  postedTime,
        title: "",
        description: ""
    })

    function handleChange(e:any) {
        setNoticeData({
            ...noticeData, [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
        setToken(localStorage.getItem('_token') || "")
      }, [])

    function handleSubmit(e:any) {
        e.preventDefault();        

        axios.post(`https://ama-oac9.onrender.com/event/post`, noticeData, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response=>{
            console.log(response);
            
        
        })
        .catch(error=>{
            console.log(error)
            setShowSpinner(false);
        })
    }


    return (
        <>
        <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="w-[550px]">
                <form className="w-full h-fit p-2 shadow rounded" onSubmit={handleSubmit}>
                <GoBackAnimatedBtn text="Go Home"/>
                <h1 className="text-2xl text-center font-semibold">Create New Notice</h1>

                <InputField title="Title" name="title" placeholder="Notice Title" type="text" handleChange={handleChange}/>

                <textarea className="w-full rounded border border-gray-300 focus:outline-green-500 p-2" placeholder="Write your notice details here......" required name="description" onChange={handleChange}></textarea>

                <button type="submit" className={`text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center items-center ${showSpinner?'pointer-events-none':'x'} ${showSpinner?'bg-green-800':'x'}` }>
                <div className={`w-fit h-fit border-t-4 p-2 border-green-500 border-solid rounded-full animate-spin ${showSpinner?'flex':'hidden'}`}></div>
                <span className="text-white ml-2">Submit</span>
                </button>
                </form>
            </div>
        </div>
        </>
    );
}