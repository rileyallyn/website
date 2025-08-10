export const TIMEZONE = 'America/Los_Angeles';

export const organizationSchema: WithContext<Organization> = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'@id': `${site.url}#organization`,
	url: site.url,
	name: site.company.name,
	description: site.description,
	sameAs: [`https://twitter.com/${site.social.twitter}`],
	logo: `${site.url}/favicon.svg`
};
