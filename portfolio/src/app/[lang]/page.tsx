import Landing from "@/components/Landing";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default async function LocalizedHome({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Landing lang={lang} copy={dictionary.home} />
      <AboutSection content={dictionary.about} />
      <ProjectsSection content={dictionary.projects} />
    </>
  );
}
