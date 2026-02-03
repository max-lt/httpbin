/// <reference types="@openworkers/workers-types" />

export function jsonResponse(data: unknown, status = 200): Response {
  return Response.json(data, { status });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getStatusText(code: number): string {
  const texts: Record<number, string> = {
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    204: 'No Content',
    301: 'Moved Permanently',
    302: 'Found',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    408: 'Request Timeout',
    418: "I'm a teapot",
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable'
  };
  return texts[code] || 'Unknown';
}

export async function buildRequestInfo(request: Request) {
  const url = new URL(request.url);

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const args: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    args[key] = value;
  });

  const info: any = {
    method: request.method,
    url: request.url,
    origin:
      request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown',
    headers,
    args
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    const contentType = request.headers.get('Content-Type') || '';
    const bodyText = await request.text();

    if (bodyText) {
      info.data = bodyText;

      if (contentType.includes('application/json')) {
        try {
          info.json = JSON.parse(bodyText);
        } catch {}
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        info.form = {};
        new URLSearchParams(bodyText).forEach((value, key) => {
          info.form![key] = value;
        });
      }
    }
  }

  return info;
}
