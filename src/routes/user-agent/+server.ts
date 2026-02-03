import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  return jsonResponse({
    'user-agent': request.headers.get('user-agent') || ''
  });
};
