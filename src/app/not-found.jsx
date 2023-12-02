"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={42} className="text-zinc-50" />
        <h3 className="text-zinc-50 text-4xl font-bold">NOT FOUND</h3>
        <button onClick={() => router.back()} className="text-zinc-50 hover:text-blue-700 transition-all underline">
          Back...
        </button>
      </div>
    </div>
  );
};

export default Page;
