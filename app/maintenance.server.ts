import { cookies } from 'next/headers';
import { MAINTENANCE, PREVIEW_COOKIE, isPreviewKey } from '@/maintenance.config';

/** True when the maintenance page should be shown (not for browsers that opened the secret preview link). */
export function showMaintenance(): boolean {
  return MAINTENANCE && !isPreviewKey(cookies().get(PREVIEW_COOKIE)?.value);
}
