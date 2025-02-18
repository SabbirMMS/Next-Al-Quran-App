import { notFound } from "next/navigation";
import SurahDetail from "./SurahDetail";

interface PageProps {
  params: Promise<{ number: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}

const fetchSurahData = async (number: string) => {
  const response = await fetch(`${process.env.BASE_URL}/surah/${number}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    notFound();
  }

  const jsonData = await response.json();
  return jsonData.data;
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { number } = await params;
  const surahData = await fetchSurahData(number);

  return {
    title: `Surah ${surahData.englishName}`,
    description: `Surah ${surahData.englishName} (${surahData.name}) is a ${surahData.revelationType} surah with ${surahData.numberOfAyahs} ayahs. Translation: ${surahData.englishNameTranslation}.`,
  };
};

const page = async ({ params, searchParams }: PageProps) => {
  const { number } = await params;
  const { lang = "en" } = await searchParams;

  const surahData = await fetchSurahData(number);

  return (
    <div>
      <SurahDetail surah={surahData} lang={lang} />
    </div>
  );
};

export default page;
