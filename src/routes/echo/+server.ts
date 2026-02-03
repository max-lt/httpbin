import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.text();

  return new Response(body, {
    headers: {
      'Content-Type': request.headers.get('Content-Type') || 'text/plain'
    }
  });
};
