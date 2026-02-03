import { buildRequestInfo, jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};
