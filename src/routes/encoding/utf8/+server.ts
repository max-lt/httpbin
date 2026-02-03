import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const utf8Sample = `
UTF-8 encoded sample:
    - English: Hello, World!
    - French: Bonjour le monde!
    - Japanese: こんにちは世界
    - Emoji: 🎉 🚀 ✨ 🔥
    - Math: ∑∏∫∂∆
    - Symbols: ©®™
`;

  return new Response(utf8Sample, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
