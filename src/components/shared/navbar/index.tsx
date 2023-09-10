import NavbarButtons from "./navabrButtons";
import NavbarMenu from "./navbarMenu";
export default function index() { 
  return ( <>
  
  <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-2xl flex flex-col lg:flex-row flex-wrap items-center justify-between mx-auto p-4">

    <div className="w-full flex justify-between">
      <a href="https://flowbite.com/" className="flex items-center lg:hidden">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="TMKM Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TMKM</span>
      </a>
      
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
      </button>
    </div>
      
      <div className="flex lg:hidden w-full">
        <NavbarMenu/>
      </div>

      <div className="hidden lg:flex">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TMKM</span>
        </a>
        <div className="ml-7 mt-1">
          <NavbarMenu/>
        </div>
      </div>

      
      <button data-collapse-toggle="navbar-user" type="button" className="hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded lg:flex lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
      </button>

      <div className="hidden lg:flex">
      <NavbarButtons/>
      </div>
    </div>
  </nav>
</> 
  ); 
};