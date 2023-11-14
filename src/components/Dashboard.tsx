"use client"
import { trpc } from "@/app/_trpc/client";

import UploadButton from "./UploadButton";

import Sketeleton from "react-loading-skeleton"
import { Ghost } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export function Dashboard(){
  const {data : files , isLoading} = trpc.getUserFiles.useQuery()
    return(
        <main className='mx-auto max-w-7xl md:p-10 h-screen'>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900'>
          My Files
        </h1>

        <UploadButton  />
      </div>

     
      {files && files.length !==0 ?
      (<div>
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'">
         { files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            ).map((file)=>(
              (
                <li key={file.id}
                className='col-span-1 divide-y divide-red-800 rounded-lg bg-white shadow transition hover:shadow-lg'>
                  <Link href={`/dashboard/${file.id}`} className="flex flex-col ">
                    <div className="p-6 px-6 flex w-full items-center justify-between space-x-6 ">
                      <div className="bg-blue-500 rounded-full h-10 w-10 " />
                      <div className='flex-1 truncate'>
                      <div className='flex items-center space-x-3'>
                        <h3 className='truncate text-lg font-medium text-zinc-900'>
                          {file.name}
                        </h3>
                      </div>
                    </div>
                    </div>
                  </Link>
                </li>
              )
            ))}
        </ul>
      </div> ):isLoading ?
      ( <Skeleton height={100} count={3} className="my-2"></Skeleton> ):(
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className=" h-8 w-8 text-zinc-800"></Ghost>
          <h3 className="font-semibold text-xl">Pretty empty around here </h3>
          <p className="font-serif">let&apos;s upload some PDF first </p>
        </div>
      )}
     

  


      </main>
    )
}