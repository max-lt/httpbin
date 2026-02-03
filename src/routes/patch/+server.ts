import { buildRequestInfo, jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const PATCH: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};
