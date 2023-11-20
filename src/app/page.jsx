import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header.jsx";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);

  const topAnime = await response.json();

  return (
    <div>
      <section>
        <Header title="Most Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
