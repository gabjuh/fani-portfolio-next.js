// TEMPORARY maintenance mode (website is being reworked).
// true  -> only the maintenance page on "/" (plus Impressum/AGB) is reachable; every other path redirects to "/".
// false -> normal website again. To remove completely: delete this file, middleware.ts,
//          app/components/Maintenance.tsx, public/wartung/ and the MAINTENANCE checks in app/layout.tsx and app/page.tsx.
export const MAINTENANCE = true;

// Secret preview of the full (old) website during maintenance:
//   open  https://<domain>/vorschau/<MAINTENANCE_PREVIEW_KEY>  -> sets a cookie, the whole old site is visible
//   open  https://<domain>/vorschau/aus                        -> removes the cookie again
// The key lives only in the environment (.env / Vercel env), never in this public repo.
// Without MAINTENANCE_PREVIEW_KEY the preview is disabled.
export const PREVIEW_COOKIE = 'site_preview';

export function isPreviewKey(value: string | undefined): boolean {
  const key = process.env.MAINTENANCE_PREVIEW_KEY;
  return !!key && key.length >= 12 && value === key;
}
