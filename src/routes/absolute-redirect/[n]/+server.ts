import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
  const n = parseInt(params.n) || 1;
  const baseUrl = `${url.protocol}//${url.host}`;

  if (n <= 1) {
    throw redirect(302, `${baseUrl}/get`);
  }

  throw redirect(302, `${baseUrl}/absolute-redirect/${n - 1}`);
};
