import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  //todo: remove
  if (pathname === '/catalog/stenovoi-arbolitovyi-blok_1') {
    url.pathname = '/catalog/stenovoi-arbolitovyi-blok';
    return NextResponse.redirect(url, 301);
  }

  const hasUpperCase = /[A-Z]/.test(pathname);

  const hasMultipleSlashes = /\/\/+/.test(pathname);

  if (hasUpperCase || hasMultipleSlashes) {
    let normalizedPath = pathname;

    if (hasUpperCase) {
      normalizedPath = normalizedPath.toLowerCase();
    }

    if (hasMultipleSlashes) {
      normalizedPath = normalizedPath.replace(/\/\/+/g, '/');
    }

    url.pathname = normalizedPath;

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Применяем middleware ко всем путям кроме:
     * - api (API routes)
     * - _next/static (статические файлы)
     * - _next/image (оптимизированные изображения)
     * - favicon.ico (иконка)
     * - robots.txt, sitemap.xml (SEO файлы)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|feed.xml).*)',
  ],
};
