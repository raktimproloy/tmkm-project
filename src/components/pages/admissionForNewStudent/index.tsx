import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import AdmissionForNewUser from "./addmissionForNewStudentCard";

export default function AdmissionForNewStudent() {
    return (
        <>
        <TextWithImagePlaceholder title="New Student Admission Process" routeTextWithBold="Home" routeTextWithGray="admission/new-student"/>

        <div className="max-w-screen-xl p-3 md:p-7 lg:p-20 m-auto bg-green-50 rounded">
            <div className="w-full h-full">
                <h1 className="text-gray-700 font-bold text-2xl md:text-3xl text-center my-5">New Student Admission Process</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AdmissionForNewUser serial="01" serialBottomText="From" details="First Class To Eight Class" />
                    <AdmissionForNewUser serial="02" serialBottomText="From" details="From Class Nine To Kamel" />
                    <AdmissionForNewUser serial="03" serialBottomText="From" details="From Class Honours To Masters" />
                </div>
            </div>
        </div>
        </>
    );
}