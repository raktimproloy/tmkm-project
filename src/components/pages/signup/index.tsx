import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import GoBackAnimatedBtn from "@/components/shared/goBackAnimatedBtn";

export default function Signup() {
    return (
        <>
        <TextWithImagePlaceholder title={'Sign Up Now!'} routeTextWithBold={'Home'} routeTextWithGray={'signup'}/>
        <div className="w-full flex justify-center items-center p-5 my-16">
            <div className="md:w-96 shadow p-5">

                <div>
                    <GoBackAnimatedBtn text="Go Back"/>
                </div>

                <div className="text-2xl font-semibold text-gray-800 text-center mt-10">Sign Up</div>
                <form className="mt-5 md:mt-10">
                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>

                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 " placeholder="Email" required />
                </div>
                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Password</label>

                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="Password" required />
                </div>
                <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Phone Number (Optional)</label>

                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500" placeholder="01xxxxxxxxx" required />
                </div>

                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Select an option</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:outline-green-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected value="none">Choose account type</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    </select>

                </div>
                <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register Now!</button>
                </form>

                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        Or
                    </div>
                </div>
                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">


                <svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="m512 256c0 127.78-93.62 233.69-216 252.89v-178.89h59.65l11.35-74h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98h32.28v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6v56.4h-65v74h65v178.89c-122.38-19.2-216-125.11-216-252.89 0-141.38 114.62-256 256-256s256 114.62 256 256z" fill="#1877f2"/><path d="m355.65 330 11.35-74h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979h32.281v-63s-29.296-5-57.305-5c-58.476 0-96.695 35.44-96.695 99.6v56.4h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111v-178.889z" fill="#fff"/></g></svg>

                <span className="flex-1 ml-3 whitespace-nowrap text-gray-600">Connect with facebook</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Quick Signup</span>
                </a>
            </div>
            </div>
        </>
    );
}