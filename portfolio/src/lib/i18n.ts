export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    certifications: string;
    projects: string;
    courses: string;
    lightMode: string;
    darkMode: string;
  };
  home: {
    greeting: string;
    headline: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    resumeLabel: string;
  };
  projects: {
    title: string;
    githubLabel: string;
    demoLabel: string;
  };
  courses: {
    title: string;
    certificateLabel: string;
    historyLabel: string;
  };
  coursesHistory: {
    home: string;
    courses: string;
    title: string;
    tableTitle: string;
    tableTechnologies: string;
    tableInstitution: string;
    tableCompletionDate: string;
    tableCertificateLink: string;
    certificateFallback: string;
  };
  certifications: {
    title: string;
  };
};

export const localeUrls: Record<Locale, string> = {
  pt: "https://rhaiz.xyz",
  en: "https://rhaiz.xyz/en",
  es: "https://rhaiz.xyz/es",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function resolveLocale(value: string | null | undefined): Locale {
  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
}

export function buildLocalePath(locale: Locale, pathname: string) {
  const normalizedPath =
    pathname === "/"
      ? ""
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;

  return `/${locale}${normalizedPath}`;
}
