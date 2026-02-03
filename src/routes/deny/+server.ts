import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return new Response(
    `     .-''''''-.
   .' _      _ '.
  /   O      O   \\
 :                :
 |                |
 :       __       :
  \\  .-"'  '\"-.  /
   '.          .'
     '-......-'

YOU SHOULDN'T BE HERE`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
