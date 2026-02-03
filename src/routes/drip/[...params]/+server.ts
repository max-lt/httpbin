import { sleep } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
  const parts = params.params?.split('/') || [];

  const numBytes = parseInt(parts[0] || url.searchParams.get('numbytes') || '10');
  const duration = parseFloat(parts[1] || url.searchParams.get('duration') || '2');
  const delay = parseFloat(parts[2] || url.searchParams.get('delay') || '0');
  const code = parseInt(parts[3] || url.searchParams.get('code') || '200');

  if (delay > 0) {
    await sleep(delay * 1000);
  }

  const delayPerByte = (duration * 1000) / numBytes;
  let sent = 0;

  const stream = new ReadableStream({
    async pull(controller) {
      if (sent >= numBytes) {
        controller.close();
        return;
      }

      controller.enqueue(new Uint8Array([42]));
      sent++;
      await sleep(delayPerByte);
    }
  });

  return new Response(stream, {
    status: code,
    headers: { 'Content-Type': 'application/octet-stream' }
  });
};
