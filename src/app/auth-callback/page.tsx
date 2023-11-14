"use client"
import { useRouter , useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader } from "lucide-react";

const Page= () => {
    const router = useRouter()
    const seacrhParams = useSearchParams()
    const origin = seacrhParams.get('origin')
    // const apiResponse = await fetch('/api/whatever')
    // const data2 = await apiResponse.json()
    trpc.authcallback.useQuery(undefined , {onSuccess:(success)=>{
        if(success){
            router.push(origin ? `/${origin}` : '/dashboard')
        }

    }, onError:(err)=>{
        if(err.data?.code === "UNAUTHORIZED"){
            router.push("/sign-in")
        }
    },
    retry :true ,
    retryDelay :5000

})
return(
    <div className="w-full mt-24 flex justify-center ">
        <div className="flex flex-col items-center gap-2">
<Loader className="h-8 w-8 animate-spin text-zinc-800"></Loader>
<h3 className="font-semibold text-xl"> Setting up your account...</h3>
<p className="font-serif text-gray-800"> You will be redirected shortly</p>
        </div>
    </div>
)
}
export default Page