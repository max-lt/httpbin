import type { RequestHandler } from './$types';

// import { sleep } from '$lib/helpers';

// export const GET: RequestHandler = async ({ params }) => {
//   const numChunks = Math.min(parseInt(params.n) || 10, 100);
//   const encoder = new TextEncoder();
//   let index = 0;
//
//   const stream = new ReadableStream({
//     async pull(controller) {
//       if (index >= numChunks) {
//         controller.close();
//         return;
//       }
//
//       const data = { id: index, chunk: `chunk-${index}` };
//       controller.enqueue(encoder.encode(JSON.stringify(data) + '\n'));
//       index++;
//       await sleep(50);
//     }
//   });
//
//   return new Response(stream, {
//     headers: { 'Content-Type': 'application/x-ndjson' }
//   });
// };

export const GET: RequestHandler = async ({ params }) => {
  const numChunks = Math.min(parseInt(params.n) || 10, 100);
  let interval: ReturnType<typeof setInterval> | null = null;

  const stream = new ReadableStream({
    start(controller) {
      let i = 0;

      interval = setInterval(() => {
        const chunk = `data: message ${i} from worker at ${new Date().toISOString()}\n\n`;
        controller.enqueue(new TextEncoder().encode(chunk));
        i++;

        if (i >= numChunks) {
          if (interval) clearInterval(interval);
          controller.close();
        }
      }, 200);
    },
    cancel() {
      if (interval) clearInterval(interval);
    }
  });

  return new Response(stream, {
    headers: {
      'X-Accel-Buffering': 'no',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
};
