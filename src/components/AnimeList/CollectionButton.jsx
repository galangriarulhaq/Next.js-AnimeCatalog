"use client";

import { useState } from "react";

import { BookmarkSimple } from "@phosphor-icons/react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleButton = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="text-zinc-50">Berhasil di tambahkan</p>
      ) : (
        <button onClick={handleButton} className="px-2 py-1 bg-violet-950">
          <BookmarkSimple size={32} />
        </button>
      )}
    </>
  );
};

export default CollectionButton;
