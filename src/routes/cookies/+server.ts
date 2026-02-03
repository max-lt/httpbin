import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  const cookies: Record<string, string> = {};
  const cookieHeader = request.headers.get('Cookie') || '';

  cookieHeader.split(';').forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    if (name) cookies[name] = value || '';
  });

  return jsonResponse({ cookies });
};
