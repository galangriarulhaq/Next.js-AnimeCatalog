import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4 md:px-20">
      {api.data?.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-zinc-50 transition-all" key={anime.mal_id}>
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="object-cover" />
            <div className="bg-gray-700 grid-cols-1 p-2 hover:text-blue-700 ">
              <h3 className="font-bold text-md mb-4 flex justify-center items-center">{anime.title}</h3>
              {anime.score && (
                <div className="grid grid-cols-2 gap-2 px-2">
                  <h4 className="text-sm ">Episode : {anime.episodes}</h4>
                  <h4 className="text-sm ">Score : {anime.score}</h4>
                  <h4 className="text-sm ">Rating : {anime.rating}</h4>
                  <h4 className="text-sm ">Season : {anime.season}</h4>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
