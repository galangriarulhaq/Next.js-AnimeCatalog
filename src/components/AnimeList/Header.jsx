import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between text-zinc-50 items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-md underline hover:text-blue-700 transition-all">
          {" "}
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
