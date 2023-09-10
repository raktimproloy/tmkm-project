export default function StudentLogin() {
    return (
        <>
        
<form className="p-5 bg-[#00ff580a] backdrop-blur-[100px]">
    <div className="text-2xl font-semibold my-3 text-center">
        Student Login
    </div>
  <div className="mb-6">
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Student Mail" required/>
  </div>
  <div className="mb-6">
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Student Password" required/>
  </div>
  <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Login Now</button>

  <div className="mt-6">
    <span className="text-gray-700">Fotgot Password?</span>
    <a href="#" className="text-blue-500 ml-2">Click here to Recover.</a>
  </div>
</form>

        </>
    )
}