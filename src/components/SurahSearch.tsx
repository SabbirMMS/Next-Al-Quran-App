"use client";
import { useState, useEffect } from "react";
import SurahCard, { SurahData } from "@/components/SurahCard";

interface SurahSearchProps {
  surahData: SurahData[];
}

export default function SurahSearch({ surahData }: SurahSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultCount, setResultCount] = useState(114);

  const filteredSurahs = surahData.filter((surah) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      surah.name.toLowerCase().includes(searchTermLower) ||
      surah.englishName.toLowerCase().includes(searchTermLower) ||
      surah.englishNameTranslation.toLowerCase().includes(searchTermLower) ||
      surah.revelationType.toLowerCase().includes(searchTermLower) ||
      surah.number.toString().includes(searchTermLower) ||
      surah.numberOfAyahs.toString().includes(searchTermLower)
    );
  });

  useEffect(() => {
    setResultCount(filteredSurahs.length);
  }, [filteredSurahs]);

  return (
    <div className="text-white p-4 rounded-lg shadow-md ">
      <div className="flex items-center justify-center gap-2 mb-4 relative">
        <p className="block text-md text-gray-400">Search</p>
        <input
          type="text"
          placeholder="Search Surah"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" p-2 me-10 border rounded-sm border-gray-700 bg-gray-800 text-white w-full md:w-2/6"
        />
        <p className="block text-sm text-gray-400 fixed end-5">
          {resultCount >= 114 ? null : resultCount}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredSurahs.map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
      {/* <p className="text-gray-400 mt-4">Results: {resultCount}</p> */}
    </div>
  );
}
