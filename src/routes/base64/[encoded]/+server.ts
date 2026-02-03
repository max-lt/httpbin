import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  try {
    const decoded = atob(params.encoded);

    return new Response(decoded, {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch {
    return new Response('Invalid base64', { status: 400 });
  }
};
