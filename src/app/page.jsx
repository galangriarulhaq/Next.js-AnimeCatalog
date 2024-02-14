import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header.jsx";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api";

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);

  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 6);
  return (
    <div>
      <section>
        <Header title="Most Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  );
};

export default Page;
