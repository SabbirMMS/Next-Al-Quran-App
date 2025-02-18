"use client";
import { useState, useEffect, useRef } from "react";
import AyahItem, { Ayah } from "@/components/AyahItem";

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: Ayah[];
}

interface SurahDetailProps {
  surah: Surah;
  lang: string;
}

const SurahDetail: React.FC<SurahDetailProps> = ({ surah }) => {
  const [currentAyahIndex, setCurrentAyahIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const nextAudioRef = useRef<HTMLAudioElement>(null);

  const handleAudioEnded = () => {
    if (
      currentAyahIndex !== null &&
      currentAyahIndex < surah.ayahs.length - 1
    ) {
      setCurrentAyahIndex(currentAyahIndex + 1);
    }
  };

  const handlePlayAyah = (index: number) => {
    setCurrentAyahIndex(index);
  };

  useEffect(() => {
    if (currentAyahIndex !== null && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentAyahIndex]);

  useEffect(() => {
    if (
      currentAyahIndex !== null &&
      currentAyahIndex < surah.ayahs.length - 1 &&
      nextAudioRef.current
    ) {
      nextAudioRef.current.load();
    }
  }, [currentAyahIndex]);

  return (
    <div className="SurahDetail text-white p-4 rounded-lg shadow-md bg-gray-900 min-h-[calc(100vh-110px)]">
      <div className="py-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-green-600">{surah.name}</h2>
          <h2 className="text-2xl font-bold">
            {surah.englishName}{" "}
            <span className="text-sm text-gray-400">({surah.englishNameTranslation})</span>
          </h2>
          <p className="text-gray-400 mt-1">{surah.revelationType}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <p className="text-sm text-gray-400">
              📖 Number of Ayahs: <span className="text-white">{surah.numberOfAyahs}</span>
            </p>
            <p className="text-sm text-gray-400">
              🔢 Surah Number: <span className="text-white">{surah.number}</span>
            </p>
          </div>
        </div>
      {currentAyahIndex !== null && (
        <div className="my-4 w-full">
          <audio
            ref={audioRef}
            controls
            autoPlay
            preload="auto"
            className="w-full"
            onEnded={handleAudioEnded}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_AUDIO_URL}/${
                surah.ayahs[currentAyahIndex].number
              }`}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          {currentAyahIndex < surah.ayahs.length - 1 && (
            <audio ref={nextAudioRef} preload="auto" className="hidden">
              <source
                src={`${process.env.NEXT_PUBLIC_AUDIO_URL}/${
                  surah.ayahs[currentAyahIndex + 1].number
                }`}
                type="audio/mpeg"
              />
            </audio>
          )}
        </div>
      )}
      <ul className="mt-4">
        {surah.ayahs.map((ayah, index) => (
          <AyahItem
            key={ayah.numberInSurah}
            ayah={ayah}
            index={index}
            isActive={index === currentAyahIndex}
            onPlay={handlePlayAyah}
            onEnded={handleAudioEnded}
          />
        ))}
      </ul>
    </div>
  );
};

export default SurahDetail;