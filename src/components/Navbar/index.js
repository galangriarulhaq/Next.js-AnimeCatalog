import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-violet-950">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          AnimeKu
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
