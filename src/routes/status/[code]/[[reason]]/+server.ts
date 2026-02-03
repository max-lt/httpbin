import { getStatusText } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const code = parseInt(params.code) || 200;
  const reason = params.reason ? decodeURIComponent(params.reason) : undefined;

  if (code === 204 || code === 304) {
    return new Response(null, { status: code, statusText: reason });
  }

  if (code >= 300 && code < 400) {
    return new Response(null, {
      status: code,
      statusText: reason,
      headers: { Location: '/' }
    });
  }

  return new Response(`${code} ${reason || getStatusText(code)}`, {
    status: code,
    statusText: reason,
    headers: { 'Content-Type': 'text/plain' }
  });
};
