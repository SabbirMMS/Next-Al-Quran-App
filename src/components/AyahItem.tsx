"use client";

import { useRef, useEffect } from "react";

export interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  translation?: string;
}

interface AyahItemProps {
  ayah: Ayah;
  index: number;
  isActive: boolean;
  onPlay: (index: number) => void;
  onEnded: () => void;
}

const AyahItem = ({
  ayah,
  index,
  isActive,
  onPlay,
  onEnded,
}: AyahItemProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    onPlay(index);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", onEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", onEnded);
      }
    };
  }, [onEnded]);

  return (
    <li
      className={`ayah p-2 mb-2 rounded ${
        isActive ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <span className="ayah-number font-bold">{ayah.numberInSurah}</span>
      <span className="ayah-text ml-2">{ayah.text}</span>
      {ayah.translation && (
        <span className="ayah-translation ml-2 text-gray-400">
          {ayah.translation}
        </span>
      )}
      <button
        onClick={handlePlay}
        className="ml-4 text-blue-400 hover:underline"
      >
        Play
      </button>
      {isActive && (
        <audio ref={audioRef} controls className="hidden">
          <source
            src={`${process.env.NEXT_PUBLIC_AUDIO_URL}/${ayah.numberInSurah}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      )}
    </li>
  );
};

export default AyahItem;
