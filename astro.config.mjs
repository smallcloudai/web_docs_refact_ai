import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Refact Documentation',
			logo: {
				light: '/src/assets/logo.svg',
				dark: '/src/assets/logo.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/smallcloudai',
				discord: 'https://smallcloud.ai/discord'
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is Refact?', link: '/getting-started/what-is-refact/' },
						{ label: 'Installation', link: '/getting-started/installation/' },
						{ label: 'Plugin Setup', link: '/getting-started/plugin-setup/' },
						{ label: 'Supported Models', link: '/getting-started/supported-models/' },
						{ label: 'Privacy', link: '/getting-started/privacy/' },
						{ label: 'Self-Hosted', link: '/getting-started/self-hosted/' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'AI Chat', link: '/features/ai-chat/' },
						{ label: 'Code Completion', link: '/features/code-completion/' },
						{ label: 'AI Toolbox', autogenerate: { directory: 'features/ai-toolbox' } },
					]
				},
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts' },
				},
				{
					label: 'Contributing',
					link: '/contributing/',
				},
				{
					label: 'Changelog',
					link: '/changelog/',
				}
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
