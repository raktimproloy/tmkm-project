interface Props{
    title:string,
    type:string,
    name:string,
    placeholder:string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function InputField({title,type,name,placeholder,handleChange}:Props) {
    return (
        <>
        <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">{title}</label>
                <input type={type} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500 " name={name} placeholder={placeholder} required onChange={(e) => handleChange(e)}/>
        </div>
        </>
    );
}