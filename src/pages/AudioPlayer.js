import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(
    new Audio(
      "https://firebasestorage.googleapis.com/v0/b/jauzatu-c2ed1.appspot.com/o/Maher%20Zain%20-%2005%20Baraka%20Allah%20Lakuma.mp3?alt=media&token=e38fe981-143c-4cd0-b8c0-9320c20db86a"
    )
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
