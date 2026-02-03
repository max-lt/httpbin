import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const xml = `<?xml version='1.0' encoding='us-ascii'?>
<slideshow
    title="Sample Slide Show"
    date="Date of publication"
    author="Yours Truly">
    <slide type="all">
        <title>Wake up to WonderWidgets!</title>
    </slide>
    <slide type="all">
        <title>Overview</title>
        <item>Why WonderWidgets are great</item>
        <item>Who buys WonderWidgets</item>
    </slide>
</slideshow>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
