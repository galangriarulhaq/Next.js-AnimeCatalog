"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "350",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} className="text-zinc-50 float-right bg-indigo-950 px-3 mb-1 hover:bg-blue-700 transition-all">
          X
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert("Video is broken, please try another ")} />
      </div>
    );
  };

  const ButtonOnPlayer = () => {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-zinc-50 text-indigo-950  text-xl hover:bg-blue-700 hover:text-zinc-50 transition-all shadow-xl">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOnPlayer />;
};

export default VideoPlayer;
