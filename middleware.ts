import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  if (request.headers.get('x-forwarded-proto') === 'http') {
    return NextResponse.redirect(
      new URL(`https://${url.host}${url.pathname}${url.search}`),
      301
    );
  }

  const parts = pathname.split('/');
  if (parts.length >= 3 && /[A-Z]/.test(parts[2])) {
    parts[2] = parts[2].toLowerCase();
    url.pathname = parts.join('/');
    return NextResponse.redirect(url, 301);
  }

  if (/\/{2,}/.test(pathname)) {
    url.pathname = pathname.replace(/\/{2,}/g, '/');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};
