import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, request }) => {
  const size = Math.min(parseInt(params.n) || 1024, 10 * 1024 * 1024);
  const rangeHeader = request.headers.get('Range');

  const generateData = (start: number, end: number): Uint8Array => {
    const data = new Uint8Array(end - start);

    for (let i = 0; i < data.length; i++) {
      data[i] = 97 + ((start + i) % 26);
    }

    return data;
  };

  if (rangeHeader) {
    const match = rangeHeader.match(/bytes=(\d*)-(\d*)/);

    if (match) {
      const start = match[1] ? parseInt(match[1]) : 0;
      const end = match[2] ? Math.min(parseInt(match[2]) + 1, size) : size;

      if (start >= size) {
        return new Response(null, {
          status: 416,
          headers: { 'Content-Range': `bytes */${size}` }
        });
      }

      return new Response(generateData(start, end), {
        status: 206,
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Range': `bytes ${start}-${end - 1}/${size}`,
          'Content-Length': (end - start).toString(),
          'Accept-Ranges': 'bytes'
        }
      });
    }
  }

  return new Response(generateData(0, size), {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': size.toString(),
      'Accept-Ranges': 'bytes'
    }
  });
};
