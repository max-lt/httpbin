import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const headers = new Headers();

  url.searchParams.forEach((_, key) => {
    headers.append('Set-Cookie', `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  });

  return new Response(null, {
    status: 302,
    headers: {
      ...Object.fromEntries(headers),
      Location: '/cookies'
    }
  });
};
