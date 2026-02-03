import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>httpbin.workers.rocks</title>
</head>
<body>
  <h1>Herman Melville - Moby Dick</h1>
  <p>
    Availing himself of the mild, summer-cool weather that now reigned in these latitudes,
    and in preparation for the peculiarly active pursuits shortly to be anticipated, Perth,
    the begrimed, blistered old blacksmith, had not removed his portable forge to the hold
    again, after concluding his contributory work for Ahab's leg, but still retained it on
    deck, fast lashed to ringbolts by the foremast; being now almost incessantly employed
    upon one thing and another, he was in full sight of the crew.
  </p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
};
