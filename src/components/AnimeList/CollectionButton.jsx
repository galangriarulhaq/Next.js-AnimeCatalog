"use client";

import { useState } from "react";

import { BookmarkSimple } from "@phosphor-icons/react";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-zinc-50">Berhasil di tambahkan</p>
      ) : (
        <button onClick={handleCollection} className="px-2 py-1 bg-violet-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-zinc-50 duration-300">
          <BookmarkSimple size={32} />
        </button>
      )}
    </>
  );
};

export default CollectionButton;
