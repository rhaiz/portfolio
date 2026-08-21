import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/app/context/themeContext";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, localeUrls, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dictionary = await getDictionary(lang);

  return {
    metadataBase: new URL("https://rhaiz.xyz"),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: localeUrls[lang],
      languages: {
        pt: localeUrls.pt,
        en: localeUrls.en,
        es: localeUrls.es,
        "x-default": "https://rhaiz.xyz",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <ThemeProvider>
      <Navbar lang={lang as Locale} labels={dictionary.nav} />
      <main className="flex-grow pt-16">{children}</main>
      <Footer lang={lang as Locale} />
    </ThemeProvider>
  );
}
