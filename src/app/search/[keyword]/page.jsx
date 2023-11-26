import { getAnimeResponse } from "@/app/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header.jsx";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);

  // const searchAnime = await response.json();
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <div>
      <section>
        <Header title={`Search for ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
