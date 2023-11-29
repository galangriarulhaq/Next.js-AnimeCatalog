"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <button onClick={handleBack} className="text-zinc-50 hover:bg-zinc-50 hover:text-slate-950 transition-all">
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-zinc-50 text-center font-bold">{title}</h3>
    </div>
  );
};

export default Header;
