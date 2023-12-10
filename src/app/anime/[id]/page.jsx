import { getAnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/utils/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-zinc-50">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-zinc-50 overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-zinc-50 p-2">
          <h4>Ranking</h4>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-zinc-50 p-2">
          <h4>Score</h4>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-zinc-50 p-2">
          <h4>Anggota</h4>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-zinc-50 p-2">
          <h4>Episode</h4>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-zinc-50">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <h3 className="text-zinc-50 text-2xl px-10 py-4 mb-2">Comment : </h3>
      <div className="md:px-28 sm:px-10 md:py-4 sm:py-2 p-4 ">
        <div className=" md:w-2/3 sm:w-full h-96 bg-transparent border-4 border-zinc-700 rounded-xl mb-2 py-2 px-1 overflow-auto ">
          <CommentBox anime_mal_id={id} />
        </div>
        <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
