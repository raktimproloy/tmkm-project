import Link from "next/link";

interface Props{
    text: string
}

export default function GreenBtn({text}: Props) {
    return (
        <Link href="#" className="bg-green-500 hover:bg-green-600 rounded text-white px-5 py-2 my-5">
            {text}
        </Link>
        );
}