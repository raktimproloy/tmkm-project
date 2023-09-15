import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";

export default function ContactUs() {
    return (
        <>
        <TextWithImagePlaceholder title="Contact Us" routeTextWithBold="Home" routeTextWithGray="contact-us" />
            <div className="m-10">
                <div className="p-20 rounded bg-green-50 m-auto max-w-screen-xl">
                    <div className="w-full">
                        <h1 className="text-center text-2xl md:text-4xl font-semibold">Do you have any query, Contact us!</h1>
                        <h1 className="text-center text my-2">Lorem ipsum dolor sit amet consectetur adipisicing el Aperia</h1>
                    </div>

                    <div className="w-full grid md:grid-cols-2 gap-5 my-16">
                        <div>
                            <form>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label>First Name:</label>
                                        <input className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 "required placeholder="First Name" type="text"></input>
                                    </div>
                                    <div>
                                        <label>Last Name:</label>
                                        <input className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 "required placeholder="Last Name" type="text"></input>
                                    </div>
                                </div>
                                
                                <div className="my-5">
                                        <label>Email:</label>
                                        <input className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 "required placeholder="Email" type="email"></input>
                                </div>
                                <div className="my-5">
                                        <label>Phone Number:</label>
                                        <input className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 "required placeholder="Number" type="number"></input>
                                </div>
                                <div className="my-5">

                                    <label>Write your message:</label>
                                    <textarea className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 "required placeholder="Write your message">
                                        
                                    </textarea>
                                </div>
                                
                                <div className="my-5">
                                    <button type="submit" className="bg-green-500 rounded text-white hover:bg-green-600 h-fit w-full px-5 py-2">
                                        Send Message!
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div>
Map here
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}