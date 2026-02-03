import { buildRequestInfo, jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};

export const POST: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};

export const PUT: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};

export const DELETE: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};

export const PATCH: RequestHandler = async ({ request }) => {
  return jsonResponse(await buildRequestInfo(request));
};
