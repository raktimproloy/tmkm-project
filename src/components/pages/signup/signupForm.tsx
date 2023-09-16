import { useState } from "react";
import InputField from "@/components/shared/inputField";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

export default function SignForm() {
    
    const router = useRouter();

    const [signupData, setSignupData] = useState({
        fullName:  "",
        email:  "", 
        password:  "",
        phone: "",
        address:"",
        studentId: "",
        userType: "student",
    })
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")

    const [showSpinner, setShowSpinner] = useState(false);

    function handleConfirmPassword(e:any) {
        setConfirmPassword(e.target.value);
    }

    function handleChange(e:any) {
        setSignupData({
            ...signupData, [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e:any) {
        e.preventDefault();        
        setShowSpinner(true);
        
        if(signupData.fullName === "" || signupData.password === "" || signupData.email == ""){
           setErrorMessage("Field cannaot be empty!") 
           setShowSpinner(false);
        }
        else if (signupData.password !== confirmPassword) {
           setErrorMessage("Your password isn't matching!") 
           setShowSpinner(false);

        }
        else {
            axios.post(`https://ama-oac9.onrender.com/user/${signupData.userType}/signup`, signupData)
            .then(response=>{
                router.push("/login")
            })
            .catch(error=>{
                console.log(error)
                setErrorMessage(error.response.data.error);
                setShowSpinner(false);
            })
        }
    }
    return (
        <>
            <div className={`w-full px-5 py-2 rounded bg-red-500 text-white mt-5 ${errorMessage?'block':'hidden'}`}>
                {errorMessage}
            </div>
            <form className="mt-5 md:mt-10" onSubmit={handleSubmit}>
                
                <InputField title={"Full Name*"} type={"text"} name={"fullName"} placeholder={"Your full name"} handleChange={handleChange}/>
                <InputField title={"Email*"} type={"email"} name={"email"} placeholder={"Your email"} handleChange={handleChange}/>
                <InputField title={"Password*"} type={"password"} name={"password"} placeholder={"Your password"} handleChange={handleChange}/>
                <InputField title={"Confirm Pasword*"} type={"password"} name={"confirmPassword"} placeholder={"Your confirm password"} handleChange={handleConfirmPassword}/>
                <InputField title={"Phone Number"} type={"number"} name={"phone"} placeholder={"Your phone number"} handleChange={handleChange}/>
                <InputField title={"Address"} type={"text"} name={"address"} placeholder={"Your full address"} handleChange={handleChange}/>
                <InputField title={"Student ID"} type={"text"} name={"studentId"} placeholder={"Student Id"} handleChange={handleChange}/>
                
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
                <span className="text-white ml-2">Register Now!</span>
                </button>
                </form>
        </>
    );
}