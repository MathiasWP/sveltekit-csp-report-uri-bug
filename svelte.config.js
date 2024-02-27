import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				"report-uri": [
					// This enables capturing of CSP violations with Sentry, see: https://blog.sentry.io/how-sentry-captures-csp-violations/
					'https://123.ingest.sentry.io/api/456/security/?sentry_key=123mykey&sentry_environment=development&sentry_release=sha1-release-hash'
				]
			}
		}
	}
};

export default config;
