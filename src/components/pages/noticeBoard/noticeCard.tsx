interface Props{
    data: {
        postedTime: string;
        title: string;
        description: string;
    },

}


export default function NoticeCard({data}:Props){ 

    const {postedTime,title,description} = data;

    return (
    <>
        <div className="h-fit p-3 border border-gray-200 rounded bg-white m-5 md:m-0">
        <div className="flex flex-row justify-between">
            <div className="bg-green-100 text-gray-800 rounded p-2 text-xs font-semibold">Publish Date: {postedTime}</div>
            <div className="border border-gray-200 rounded text-xs p-2">SL 01</div>
        </div>
        <div className="flex flex-col justify-start my-5">
            <h1 className="text-base font-semibold">{title}</h1>
            <p className="text-gray-800 mt-2">{description}</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 rounded w-full py-2 text-white font-semibold">Dowload</button>
        </div>
  </>
   );
}