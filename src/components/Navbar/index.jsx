import Link from "next/link";
import InputSearch from "./InputSearch.jsx";
import UserGitHub from "./UserGitHub.jsx";

const Navbar = () => {
  return (
    <header className="bg-violet-950">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          AnimeKu
        </Link>
        <InputSearch />
        <UserGitHub />
      </div>
    </header>
  );
};

export default Navbar;
