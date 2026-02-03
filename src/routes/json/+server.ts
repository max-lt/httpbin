import { jsonResponse } from '$lib/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return jsonResponse({
    slideshow: {
      author: 'Yours Truly',
      date: 'date of publication',
      slides: [
        { title: 'Wake up to WonderWidgets!', type: 'all' },
        {
          title: 'Overview',
          type: 'all',
          items: ['Why <em>WonderWidgets</em> are great', 'Who <em>buys</em> WonderWidgets']
        }
      ],
      title: 'Sample Slide Show'
    }
  });
};
