import type { WithContext } from 'schema-dts';
import type { Organization } from 'schema-dts';

const site = {
	url: 'https://www.example.com',
	company: { name: 'Example Inc.' },
	description: 'This is an example website',
	social: { twitter: 'example' }
};

export const organizationSchema: WithContext<Organization> = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	url: site.url,
	name: site.company.name,
	description: site.description,
	sameAs: [`https://twitter.com/${site.social.twitter}`],
	logo: `${site.url}/favicon.svg`
};
