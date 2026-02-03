import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return jsonResponse({ uuid: crypto.randomUUID() });
};
