import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Refact Documentation',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/smallcloudai',
				discord: 'https://smallcloud.ai/discord'
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is Refact?', link: '/introduction/what-is-refact/' },
						{
							label: 'Features',
							items: [
								{ label: 'AI Chat', link: '/features/ai-chat/' },
								{ label: 'Code Completion', link: '/features/code-completion/' },
								{ label: 'AI Toolbox', link: '/features/ai-toolbox/' },
								{ label: 'Fine-tuning', link: '/features/fine-tuning/' }
							]
						},
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Refact for VS Code', link: '/getting-started/vs-code/' },
						{ label: 'Refact for Jetbrains', link: '/getting-started/jetbrains/' },
						{ label: 'Self-hosted Refact', link: '/getting-started/self-hosted/' },
						{ label: 'Enterprise Refact', link: '/getting-started/enterprise/' },
					]
				},
				{
					label: 'Supported Models',
					items: [
						{ label: 'Supported Models in Refact', link: '/supported-models/supported-models/' },
						{ label: 'Refact LLM', link: '/supported-models/refact-llm/' },
						{ label: 'Starcoder', link: '/supported-models/starcoder/' },
						{ label: 'Wizard Coder', link: '/supported-models/wizard-coder/' },
						{ label: 'Code Llama', link: '/supported-models/code-llama/' },
						{ label: 'Llama2', link: '/supported-models/llama2/' },
					]
				},
				{
					label: 'Privacy',
					link: '/privacy/',
				},
				{
					label: 'Contributing',
					link: '/contributing/',
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/smallcloudai/web_docs_refact_ai/edit/main/',
			},
			lastUpdated: true,
		}),
	],
});
