import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between text-zinc-50 items-center p-4 md:px-20 mb-6 mt-6">
      <h1 className="text-3xl font-bold underline">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-md underline hover:text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300">
          {" "}
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
