import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const n = parseInt(params.n) || 1;

  if (n <= 1) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/get' }
    });
  }

  return new Response(null, {
    status: 302,
    headers: { Location: `/relative-redirect/${n - 1}` }
  });
};
