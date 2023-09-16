'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import TextWithImagePlaceholder from "@/components/shared/textWithImagePlaceholder";
import Pagination from "@/components/shared/pagination";
import NoticeCard from "./noticeCard";
import Link from "next/link";

interface Props{

    postedTime: string;
    title: string;
    description: string;


}
export default function NoticeBoard() {
  const [noticeData, setNoticeData] = useState<Array<Object>>();

  useEffect(() => {
    axios
      .get("https://ama-oac9.onrender.com/event/view/all")
      .then((response) => {
        console.log(response.data);
        setNoticeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  useEffect(()=>{
    console.log(noticeData);
    
  },[noticeData])

  return (
    <>
      <TextWithImagePlaceholder
        title={"Notice Board"}
        routeTextWithBold={"Home"}
        routeTextWithGray={"Notice Board"}
      />

      <div className="max-w-screen-xl m-auto my-10 bg-green-50 md:p-24 rounded">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold text-center">
          Notice Board
        </h1>

        <div className="w-full mt-10">
          <div className="flex justify-between">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-green-500"
                  placeholder="Search...."
                  required
                />
              </div>
            </form>

            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-green-500 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="13/09/2023"
              />
            </div>
          </div>

        {noticeData &&
         noticeData.length > 0 ? "" :

              <div className="flex justify-center items-center p-20">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
                 
        }



          <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">



            {noticeData &&
              noticeData.length > 0 &&
              noticeData.map((data, index)=>
                <NoticeCard key={index}  data={data as Props}/>
              )}

          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-10">
          <Pagination />
        </div>

        <div data-dial-init className="fixed right-6 bottom-6 group">
          <Link
            href="/notice-board/create"
            className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">Open actions menu</span>
          </Link>
        </div>
      </div>
    </>
  );
}
