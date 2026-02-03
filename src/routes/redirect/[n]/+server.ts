import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
  const n = parseInt(params.n) || 1;

  if (n <= 1) {
    throw redirect(302, new URL('/get', url.origin).toString());
  }

  throw redirect(302, new URL(`/redirect/${n - 1}`, url.origin).toString());
};
