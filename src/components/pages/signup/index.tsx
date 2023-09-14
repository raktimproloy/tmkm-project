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
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Coonfirm Password</label>

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
                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-700 rounded-lg shadow hover:bg-gray-50 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">


                <svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="m512 256c0 127.78-93.62 233.69-216 252.89v-178.89h59.65l11.35-74h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98h32.28v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6v56.4h-65v74h65v178.89c-122.38-19.2-216-125.11-216-252.89 0-141.38 114.62-256 256-256s256 114.62 256 256z" fill="#1877f2"/><path d="m355.65 330 11.35-74h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979h32.281v-63s-29.296-5-57.305-5c-58.476 0-96.695 35.44-96.695 99.6v56.4h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111v-178.889z" fill="#fff"/></g></svg>

                <span className="flex-1 ml-3 whitespace-nowrap text-gray-600">Connect with facebook</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Quick Signup</span>
                </a>

                <a href="#" className="flex items-center p-3 my-2 text-base font-bold text-gray-700 rounded-lg shadow hover:bg-gray-50 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

                <svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor"  xmlns="http://www.w3.org/2000/svg"><g><path d="m420.7 450.7c-44.4 37.5-101.999 61.3-164.7 61.3-93.3 0-175.201-51.4-219.6-126.4l16.622-76.622 73.678-13.678c17.1 55.199 68.699 95.7 129.3 95.7 29.399 0 56.7-9.3 79.2-25.8l70.8 10.8z" fill="#59c36a"/><path d="m420.7 450.7-14.7-74.7-70.8-10.8c-22.5 16.5-49.801 25.8-79.2 25.8v121c62.701 0 120.3-23.8 164.7-61.3z" fill="#00a66c"/><g id="Connected_Home_1_"><g><g><g><path d="m121 256c0 13.799 2.1 26.999 5.7 39.3l-90.3 90.3c-22.5-37.8-36.4-82.201-36.4-129.6 0-47.401 13.9-91.8 36.4-129.6l72.473 12.473 17.827 77.827c-3.6 12.299-5.7 25.499-5.7 39.3z" fill="#ffda2d"/></g></g></g></g><path d="m512 256c0 77.999-36.099 147.9-91.3 194.7l-85.5-85.5c17.399-12.601 32.1-29.401 41.7-49.2h-120.9c-8.401 0-15-6.601-15-15v-90c0-8.401 6.599-15 15-15h236.8c7.2 0 13.5 5.099 14.7 12.299 3 15.601 4.5 31.8 4.5 47.701z" fill="#4086f4"/><path d="m376.901 316c-9.6 19.799-24.302 36.599-41.7 49.2l85.499 85.5c55.201-46.8 91.3-116.7 91.3-194.7 0-15.901-1.5-32.1-4.501-47.701-1.199-7.2-7.5-12.299-14.7-12.299h-236.799v120z" fill="#4175df"/><path d="m424.9 71.499c.3 4.2-1.5 8.101-4.2 11.1l-64.2 63.9c-5.099 5.4-13.499 6-19.499 1.5-23.702-17.699-51.602-26.999-81.001-26.999-60.601 0-112.2 40.499-129.3 95.7l-90.3-90.3c44.399-75 126.3-126.4 219.6-126.4 59.7 0 117.9 22 163.5 60.399 3.3 2.701 5.1 6.9 5.4 11.1z" fill="#ff641a"/><path d="m337 147.999c6 4.501 14.399 3.9 19.499-1.5l64.2-63.9c2.701-2.999 4.501-6.899 4.2-11.1s-2.1-8.399-5.4-11.1c-45.599-38.399-103.799-60.399-163.499-60.399v121c29.399 0 57.299 9.3 81 26.999z" fill="#f03800"/></g></svg>


                <span className="flex-1 ml-3 whitespace-nowrap text-gray-600">Connect with Google</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Quick Signup</span>
                </a>
            </div>
            </div>
        </>
    );
}