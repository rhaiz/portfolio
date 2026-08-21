import { cache } from "react";
import { readFile } from "fs/promises";
import path from "path";
import {
  defaultLocale,
  resolveLocale,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

const dictionaryPath = (locale: Locale) =>
  path.join(process.cwd(), "src", "dictionaries", `${locale}.json`);

const loadDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  const fileContents = await readFile(dictionaryPath(locale), "utf8");

  return JSON.parse(fileContents) as Dictionary;
});

export async function getDictionary(locale: string): Promise<Dictionary> {
  return loadDictionary(resolveLocale(locale) ?? defaultLocale);
}
