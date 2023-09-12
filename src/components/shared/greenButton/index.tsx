import Link from "next/link";

export default function GreenBtn({text}:String) {
    return (
        <Link href="#" className="bg-green-500 hover:bg-green-600 rounded text-white px-5 py-2 my-5">
            {text}
        </Link>
        );
}