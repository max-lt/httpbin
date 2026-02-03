import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const targetUrl = url.searchParams.get('url');
  const statusCode = parseInt(url.searchParams.get('status_code') || '302');

  if (!targetUrl) {
    return new Response("Missing 'url' parameter", { status: 400 });
  }

  throw redirect(statusCode, targetUrl);
};
