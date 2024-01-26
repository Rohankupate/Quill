
import PdfChatter from "@/components/PdfChatter";
import PdfWrapper from "@/components/PdfWrapper";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { Divide } from "lucide-react";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: {
    fileid: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { fileid } = params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);
  console.log(user)

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });
  if (!file) notFound();

  return (
    <div className="w-full h-[100vh-3.5rem] flex justify-between flex-col">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* {for left side bar } */}
        <div className="flex-1 xl:flex  ">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            <PdfWrapper />
          </div>
        </div>
        <div className='shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0 '>
          <PdfChatter  />
        </div>
      </div>
    </div>
  );
};

export default Page;
