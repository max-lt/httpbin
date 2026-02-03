import { buildRequestInfo, jsonResponse, sleep } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, request }) => {
  const seconds = Math.min(parseFloat(params.n) || 0, 10);
  await sleep(seconds * 1000);

  return jsonResponse(await buildRequestInfo(request));
};
