import type { PageServerLoad } from './$types';

let visitCount = 0;

function hashCode(str: string): number {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
	}

	return Math.abs(hash);
}

const animals = ['fox', 'owl', 'wolf', 'bear', 'lynx', 'crow', 'hawk', 'hare', 'deer', 'seal'];
const adjectives = ['swift', 'silent', 'bold', 'wise', 'keen', 'calm', 'bright', 'deft', 'warm', 'wild'];

export const load: PageServerLoad = async ({ request, cookies, getClientAddress }) => {
	const userAgent = request.headers.get('user-agent') ?? 'Unknown';
	const ip = getClientAddress();
	const lang = request.headers.get('accept-language') ?? 'Unknown';
	const visited = cookies.get('visited');
	const visits = parseInt(cookies.get('visits') ?? '0') + 1;

	cookies.set('visited', new Date().toISOString(), { path: '/whoami', httpOnly: true });
	cookies.set('visits', String(visits), { path: '/whoami', httpOnly: true });

	visitCount++;

	// Generate a deterministic codename from IP + user-agent
	const fingerprint = hashCode(ip + userAgent);
	const adj = adjectives[fingerprint % adjectives.length];
	const animal = animals[(fingerprint >> 4) % animals.length];
	const codename = `${adj}-${animal}-${(fingerprint % 900 + 100)}`;

	// Server-side prime computation as proof of work
	const t0 = performance.now();
	let prime = 2;
	let count = 0;
	const target = 10000 + (fingerprint % 5000);

	for (let n = 2; count < target; n++) {
		let isPrime = true;

		for (let d = 2; d * d <= n; d++) {
			if (n % d === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			prime = n;
			count++;
		}
	}

	const computeMs = (performance.now() - t0).toFixed(2);

	return {
		ip,
		userAgent,
		lang,
		visited,
		visits,
		codename,
		serverTime: new Date().toISOString(),
		compute: {
			nthPrime: target,
			value: prime,
			ms: computeMs
		},
		totalHits: visitCount
	};
};
