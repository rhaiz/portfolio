"use client";

import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "@/app/context/themeContext";
import {
  buildLocalePath,
  locales,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type NavbarProps = {
  lang: Locale;
  labels: Dictionary["nav"];
};

const Navbar = ({ lang, labels }: NavbarProps) => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: labels.home, href: buildLocalePath(lang, "/") },
    { name: labels.about, href: buildLocalePath(lang, "/about") },
    { name: labels.experience, href: buildLocalePath(lang, "/experience") },
    { name: labels.education, href: buildLocalePath(lang, "/education") },
    { name: labels.skills, href: buildLocalePath(lang, "/skills") },
    {
      name: labels.certifications,
      href: buildLocalePath(lang, "/certifications"),
    },
    { name: labels.projects, href: buildLocalePath(lang, "/projects") },
    { name: labels.courses, href: buildLocalePath(lang, "/courses") },
  ];

  const isActivePath = (href: string) => pathName === href;

  const localeLabel: Record<Locale, string> = {
    pt: "PT",
    en: "EN",
    es: "ES",
  };

  const getLocalePath = (targetLang: Locale) => {
    if (!pathName) {
      return buildLocalePath(targetLang, "/");
    }

    const segments = pathName.split("/").filter(Boolean);
    const firstSegment = segments[0] ?? "";
    const restSegments = locales.includes(firstSegment as Locale)
      ? segments.slice(1)
      : segments;

    const suffix = restSegments.length > 0 ? `/${restSegments.join("/")}` : "/";

    return buildLocalePath(targetLang, suffix);
  };

  const handleLanguageChange = (value: string) => {
    const nextLang = value as Locale;

    if (nextLang === lang) {
      return;
    }

    router.push(getLocalePath(nextLang));
  };

  return (
    <nav className="fixed w-full bg-neutral-200/80 dark:bg-neutral-800/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 transition-colors shadow-sm">
      <div className="container max-w-9xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href={buildLocalePath(lang, "/")}
            className="text-xl font-bold text-emerald-800 dark:text-emerald-300"
          >
            Rhaiz&trade;
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-medium ${isActive ? "font-semibold text-emerald-800 dark:text-emerald-300" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <select
              value={lang}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm text-emerald-800 dark:border-neutral-600 dark:bg-neutral-800 dark:text-emerald-300"
              aria-label="Select language"
            >
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {localeLabel[locale]}
                </option>
              ))}
            </select>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 text-black dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-emerald-300" />
              ) : (
                <MoonIcon className="w-5 h-5 text-emerald-800" />
              )}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.href} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className={`block py-2 hover:text-white transition-colors ${isActivePath(item.href) ? "font-semibold text-emerald-800 dark:text-emerald-300" : ""}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div>
                <label className="block pb-2 text-sm text-emerald-800 dark:text-emerald-300">
                  Language
                </label>
                <select
                  value={lang}
                  onChange={(event) => {
                    handleLanguageChange(event.target.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-emerald-800 dark:border-neutral-600 dark:bg-neutral-800 dark:text-emerald-300"
                  aria-label="Select language"
                >
                  {locales.map((locale) => (
                    <option key={locale} value={locale}>
                      {localeLabel[locale]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center py-2 dark:text-emerald-300 text-emerald-800 transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-6 h-6 mr-2" /> {labels.lightMode}
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-6 h-6 mr-2" /> {labels.darkMode}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
