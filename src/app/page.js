import { data } from "autoprefixer";
import AnimeList from "../components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);

  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Most Popular Anime</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">
          {" "}
          See All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
