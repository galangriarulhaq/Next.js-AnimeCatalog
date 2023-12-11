import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <>
      <section className="mt-4 px-48 w-full">
        <Header title={"My Comment"} />
        <div className="grid grid-cols-1 py-4 gap-4 ">
          {comments.map((comment) => {
            return (
              <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-zinc-50 text-indigo-950 p-4 rounded-xl">
                <p className="underline">{comment.anime_title}</p>
                <p>{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
