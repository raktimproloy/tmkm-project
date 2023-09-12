import Image from "next/image";
import TeachersPic from "@/../public/image/teacher.jpg"

export default function TeachersSection() {
    return(
        <>
        <div className="max-w-screen-xl m-auto my-5 mt-16">
            <h5 className="px-3">Teachers</h5>
            <div className="w-full flex justify-between px-3">
                <span className="text-2xl text-gray-700">Our Most Experience Teachers</span>
                <a href="#" className="w-fit h-fit text-white px-5 py-2 rounded bg-green-500 hover:bg-green-600">
                    See all teachers
                </a>
            </div>
            <div className="grid gap-5 justify-items-center md:grid-cols-3 lg:grid-cols-4 my-5 px-3">
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
                <Image width={500} height={500} src={TeachersPic} className="w-80 h-80 object-cover" alt="teachers_pic"/>
            </div>
        </div>
        </>
    );
}