import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";

export default function OnlinePayment() {
    return (
        <>
        <TextWithImagePlaceholder title="Online Payment" routeTextWithBold="Home" routeTextWithGray="online-payment"/>

        <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="md:w-96 shadow p-5">
                
                <div className="text-2xl font-semibold text-gray-800 text-center">Online Payment System</div>
                <form className="mt-5 md:mt-10">
                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your Admission Form Number</label>

                    <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 " placeholder="Admission Form Number" required />
                </div>
                
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        Or
                    </div>
                </div>


                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Student Emaial</label>

                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="student@gmail.com" required />
                </div>

                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Student Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="Password" required />
                    <div className="flex mt-3">
                        <span className="text-gray-600">Fotgot your password?</span>
                        <a href="#" className="text-green-600 font-semibold ml-2">Click here</a>
                    </div>
                </div>

                <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Check Now!</button>
                </form>
            </div>
            </div>
        </>
    );
}