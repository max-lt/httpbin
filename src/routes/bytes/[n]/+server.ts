import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const size = parseInt(params.n) || 1024;
  const clampedSize = Math.min(size, 10 * 1024 * 1024);
  const bytes = new Uint8Array(clampedSize);
  crypto.getRandomValues(bytes);

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': clampedSize.toString()
    }
  });
};
