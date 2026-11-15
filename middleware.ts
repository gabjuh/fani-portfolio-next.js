import { NextResponse, type NextRequest } from 'next/server';
import { MAINTENANCE, PREVIEW_COOKIE, isPreviewKey } from './maintenance.config';

// Pages that stay reachable during maintenance (Impressum is legally required in Germany).
const ALLOWED = ['/', '/impressum', '/agb'];

export function middleware(req: NextRequest) {
  if (!MAINTENANCE) return NextResponse.next();
  const { pathname } = req.nextUrl;

  // Secret preview link: /vorschau/<key> turns the old site on for this browser, /vorschau/aus turns it off.
  if (pathname.startsWith('/vorschau/')) {
    // Next 13.4 drops cookies on middleware redirects, so answer with a tiny page that sets the cookie
    // and then forwards to "/" in the browser.
    const value = decodeURIComponent(pathname.slice('/vorschau/'.length));
    const res = new NextResponse(
      '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex">' +
        '<meta http-equiv="refresh" content="0;url=/"><a href="/">Weiter</a>',
      { status: 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } },
    );
    if (isPreviewKey(value)) {
      res.cookies.set(PREVIEW_COOKIE, value, {
        httpOnly: true, secure: req.nextUrl.protocol === 'https:', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 30,
      });
    } else {
      res.cookies.set(PREVIEW_COOKIE, '', { path: '/', maxAge: 0 });
    }
    return res;
  }

  if (isPreviewKey(req.cookies.get(PREVIEW_COOKIE)?.value)) return NextResponse.next();
  if (ALLOWED.includes(pathname)) return NextResponse.next();
  // 307 = temporary, so search engines keep the old pages
  return NextResponse.redirect(new URL('/', req.url), 307);
}

export const config = {
  // skip Next.js internals and static files
  matcher: ['/((?!_next/|wartung/|favicon.ico|.*\\.[a-zA-Z0-9]+$).*)'],
};
