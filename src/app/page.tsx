import SurahSearch from "@/components/SurahSearch";
import { SurahData } from "@/components/SurahCard";

export default async function Home() {
  // Fetch Quran data from API
  const response = await fetch(process.env.BASE_URL + "/surah", {
    cache: "force-cache",
  });

  const jsonData = await response.json();
  const surahData: SurahData[] = jsonData.data;

  return (
    <div className="min-h-[calc(100vh-110px)]">
      <SurahSearch surahData={surahData} />
    </div>
  );
}
