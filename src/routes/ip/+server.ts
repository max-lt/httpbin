import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown';

  return jsonResponse({ origin: ip });
};
