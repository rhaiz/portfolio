import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, resolveLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.[^/]+$/;

function parseAcceptLanguage(header: string | null) {
  if (!header) {
    return [] as string[];
  }

  return header
    .split(",")
    .map((part) => part.trim().split(";")[0].toLowerCase())
    .filter(Boolean);
}

function detectLocale(request: NextRequest) {
  const candidates = parseAcceptLanguage(
    request.headers.get("accept-language"),
  );

  for (const candidate of candidates) {
    const primaryTag = candidate.split("-")[0];

    if (locales.includes(primaryTag as (typeof locales)[number])) {
      return primaryTag;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];

  if (isLocale(pathnameLocale)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", pathnameLocale);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const locale = resolveLocale(detectLocale(request));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("x-locale", locale);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
