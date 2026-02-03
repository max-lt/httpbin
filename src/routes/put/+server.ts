import { buildRequestInfo, jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};
