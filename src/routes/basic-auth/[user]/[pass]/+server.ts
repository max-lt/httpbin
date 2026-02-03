import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, request }) => {
  const expectedUser = params.user || 'user';
  const expectedPass = params.pass || 'pass';

  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Fake Realm"' }
    });
  }

  const credentials = atob(authHeader.slice(6));
  const [user, pass] = credentials.split(':');

  if (user === expectedUser && pass === expectedPass) {
    return jsonResponse({ authenticated: true, user });
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Fake Realm"' }
  });
};
