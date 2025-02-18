import Link from "next/link";
import React from "react";

export interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface SurahCardProps {
  surah: SurahData;
}

export default function SurahCard({ surah }: SurahCardProps) {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border border-green-500 rounded-xl p-6 w-full md:w-80 cursor-pointer relative overflow-hidden hover:shadow-white hover:border-white hover:shadow-sm transition-transform duration-10 transform hover:scale-[102%] autoFlex">
      {/* Islamic pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-gold-islamic-pattern-png-image_6527333.png')]" />

      {/* Content */}
      <Link className="relative z-10" href={`/${surah.number}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gold-400 uppercase">{surah.englishName}</h2>
          <span className="text-sm text-white px-3 py-1 bg-green-600 rounded-md">
            {surah.revelationType}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-green-500 arabic-text mb-2">{surah.name}</h2>
        <p className="text-gray-300 italic mb-2">{surah.englishNameTranslation}</p>
        <div className="text-gray-400 text-sm mt-3">
          <p>📖 Number of Ayahs: <span className="text-white">{surah.numberOfAyahs}</span></p>
          <p>🔢 Surah Number: <span className="text-white">{surah.number}</span></p>
        </div>
      </Link>
    </div>
  );
}
