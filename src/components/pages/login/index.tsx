'use client'
import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder"; 
import GoBackAnimatedBtn from "@/components/shared/goBackAnimatedBtn";
import InputField from "@/components/shared/inputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AuthVerification from "@/utils/authVerify";

export default function index() { 

    const router = useRouter();
    const [showSpinner, setShowSpinner] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")


    const [loginData, setLoginData] = useState({
        email:  "",
        password:  "",
        userType: "student",
    })


    function handleChange(e:any) {
        setLoginData({
            ...loginData, [e.target.name]:e.target.value
        })
    }


    function handleSubmit(e:any) {
        e.preventDefault();        
        setShowSpinner(true);
        
        if(loginData.email === "" || loginData.password === ""){
           setErrorMessage("Field cannaot be empty!") 
           setShowSpinner(false);
        }
        else {
            axios.post(`https://ama-oac9.onrender.com/user/${loginData.userType}/login`, loginData)
            .then(response=>{
                localStorage.setItem('_token', response?.data?.token )
                AuthVerification();
                router.push("/")
            })
            .catch(error=>{
                console.log(error)
                setErrorMessage(error.response.data.error);
                setShowSpinner(false);
            })
        }
    }
    return(
         <>
            <TextWithImagePlaceholder title={'Access your account now!'} routeTextWithBold={'Home'} routeTextWithGray={'login'} />
            <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="md:w-96 shadow p-5">
                <div>
                    <GoBackAnimatedBtn text="Go back"/>
                </div>
                <div className="text-2xl font-semibold text-gray-800 text-center mt-10">Login To Your Account</div>
                <div className={`w-full px-5 py-2 rounded bg-red-500 text-white mt-5 ${errorMessage?'block':'hidden'}`}>
                    {errorMessage}
                </div>
                <form className="mt-5 md:mt-10" onSubmit={handleSubmit}>
                <InputField title="Email" type="email" name="email" placeholder="Email" handleChange={handleChange}/>
                <InputField title="Password" type="password" name="password" placeholder="Password" handleChange={handleChange}/>

                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Select an option</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:outline-green-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="userType" onChange={handleChange}>
                    <option selected value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    </select>
                </div>


                <button type="submit" className={`text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center items-center ${showSpinner?'pointer-events-none':'x'} ${showSpinner?'bg-green-800':'x'}` }>
                <div className={`w-fit h-fit border-t-4 p-2 border-green-500 border-solid rounded-full animate-spin ${showSpinner?'flex':'hidden'}`}></div>
                <span className="text-white ml-2">Login Now</span>
                </button>

                </form>
            </div>
            </div>
  </> 
  );
 }
