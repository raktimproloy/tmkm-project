import { StudentPortal } from "@/services/icons/Icons";
import { UserIcon } from "@/services/icons/Icons";
import StudentLogin from "./studentLogin";
import Link from "next/link";

export default function NavbarButtons() {
    return (
        <>
        
<div className="flex items-center md:order-2 md:mt-5">

<button type="button" id="loginDropdownStudent" data-dropdown-toggle="dropdownForLogin"  className="hidden text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 xl:flex justify-center items-center">

<div className="flex space-x-2">
    <span><StudentPortal/></span>
    <span>Student Portal</span>
</div>

</button>

<div id="dropdownForLogin" className="z-10 hidden bg-[#f7fef726] backdrop-blur-sm divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 -ml-20 w-96">
<StudentLogin/>
</div>



<button id="loginDropdown" data-dropdown-toggle="dropdown" className=" font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 border border-gray-300 text-black focus:outline-none flex justify-center items-center" type="button">

    <div className="flex justify-center items-center space-x-2">
        <UserIcon/>
        <span className="text-gray-700 hover:text-gray-800">Login</span>
    </div>

    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
  
</button>

<div id="dropdown" className="z-10 hidden bg-[#f7fef726] backdrop-blur-sm divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="loginDropdown">
      <li>
        <Link href="/login" className="block px-4 py-2 hover:bg-[#b9e7b9] dark:hover:text-white">Teacher</Link>
      </li>
      <li>
        <Link href="/login" className="block px-4 py-2 hover:bg-[#b9e7b9] dark:hover:text-white">Parent</Link>
      </li>
      <li>
        <Link href="/login" className="block px-4 py-2 hover:bg-[#b9e7b9] dark:hover:text-white">Student</Link>
      </li>
    </ul>
</div>


</div>
        </>
    );
}