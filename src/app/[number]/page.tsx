
import { notFound } from "next/navigation";
import SurahDetail from "./SurahDetail";

const page = async ({
  params,
  searchParams,
}: {
  params: { number: string };
  searchParams: { lang?: "en" | "bn" };
}) => {
  const { number } = params;
  const { lang = "en" } = searchParams;

  const response = await fetch(`${process.env.BASE_URL}/surah/${number}`, {
    cache: "force-cache",
  });

  console.log(response);
  if (!response.ok) {
    notFound();
  }

  const jsonData = await response.json();
  const surahData = jsonData.data;

  return (
    <div>
      <SurahDetail surah={surahData} lang={lang} />
    </div>
  );
};

export default page;