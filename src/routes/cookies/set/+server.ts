import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const headers = new Headers({ 'Content-Type': 'application/json' });

  url.searchParams.forEach((value, key) => {
    headers.append('Set-Cookie', `${key}=${value}; Path=/`);
  });

  return new Response(JSON.stringify({ cookies: Object.fromEntries(url.searchParams) }), {
    status: 302,
    headers: {
      ...Object.fromEntries(headers),
      Location: '/cookies'
    }
  });
};
