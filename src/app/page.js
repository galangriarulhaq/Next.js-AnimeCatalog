import { data } from "autoprefixer";
import AnimeList from "../components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);

  const topAnime = await response.json();

  return (
    <div>
      <section>
        <Header title="Most Popular" linkTitle="See All" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Home;
