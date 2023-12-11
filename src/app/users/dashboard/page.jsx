import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-10 text-zinc-50 flex flex-col justify-center items-center">
      <h5 className="mb-10 text-2xl font-bold ">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} className="rounded-full" />
      <div className="flex flex-wrap gap-4 py-8">
        <Link href="/users/dashboard/collection" className="bg-violet-950 text-slate-950 px-4 py-3 font-bold text-xl rounded-full transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300">
          My Collection
        </Link>
        <Link href="/users/dashboard/comment" className="bg-violet-950 text-slate-950 px-4 py-3 font-bold text-xl rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
