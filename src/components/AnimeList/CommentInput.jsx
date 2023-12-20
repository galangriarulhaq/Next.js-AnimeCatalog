"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="grid ">
      {isCreated && <p className="text-zinc-50">Postingan Terkirim....</p>}
      <textarea placeholder="comment here..." onChange={handleInput} value={comment} className=" w-64 bg-transparent border-4 border-zinc-700 text-zinc-50 rounded " />
      <button onClick={handlePosting} className="w-32 mt-2 py-2 px-3 text-zinc-50 bg-blue-500 rounded-full mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300">
        Posting
      </button>
    </div>
  );
};

export default CommentInput;
