import prisma from "@/libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-1 gap-2 mb-4 px-3 w-64">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="text-indigo-950 bg-zinc-50 p-4 rounded-full  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="underline">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
