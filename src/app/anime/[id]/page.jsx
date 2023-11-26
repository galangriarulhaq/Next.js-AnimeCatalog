import { getAnimeResponse } from "@/app/libs/api";
import VideoPlayer from "@/components/utils/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-zinc-50">
          {anime.data.title} - {anime.data.year}
        </h3>
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
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
