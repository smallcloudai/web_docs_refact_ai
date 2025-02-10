import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://docs.refact.ai/';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Refact Documentation',
      components: {
        Search: './src/components/Search.astro'
      },
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/smallcloudai',
        discord: 'https://smallcloud.ai/discord'
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg' }
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg' }
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-76LB6JQLMK',
          },
        },
        {
          tag: 'script',
          content: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());

						gtag('config', 'G-76LB6JQLMK');
					`,
        }
      ],
      sidebar: [
        {
          label: 'Introduction',
          collapsed: true,
          items: [
            { label: 'Quickstart', link: '/introduction/quickstart/' },
            {
              label: 'Installation',
              collapsed: true,
              items: [
                { label: 'Installation Hub', link: '/installation/installation-hub/' },
                { label: 'VS Code', link: '/installation/vs-code/' },
                { label: 'JetBrains IDEs', link: '/installation/jetbrains/' },
              ] 
            },
            {
              label: 'Features',
              collapsed: true,
              items: [
                { label: 'AI Chat', link: '/features/ai-chat/' },
                { label: 'AI Toolbox', link: '/features/ai-toolbox/' },
                { label: 'Autonomous Agent', 
                  collapsed: true,
                  items: [
                  { label: 'Getting Started', link: '/features/autonomous-agent/getting-started/' },
                  { label: 'Overview', link: '/features/autonomous-agent/overview/' },
                  { label: 'Integrations', 
                    collapsed: true,
                    items: [
                    { label: 'Overview', link: '/features/autonomous-agent/integrations/' },
                    // Development Tools
                    { label: 'Chrome', link: '/features/autonomous-agent/integrations/chrome/' },
                    { label: 'Shell Commands', link: '/features/autonomous-agent/integrations/shell-commands/' },
                    { label: 'Command Line Tool', link: '/features/autonomous-agent/integrations/command-line-tool/' },
                    { label: 'Command Line Service', link: '/features/autonomous-agent/integrations/command-line-service/' },
                    // Version Control
                    { label: 'GitHub', link: '/features/autonomous-agent/integrations/github/' },
                    { label: 'GitLab', link: '/features/autonomous-agent/integrations/gitlab/' },
                    // Container Management
                    { label: 'Docker', link: '/features/autonomous-agent/integrations/docker/' },
                    // Databases
                    { label: 'PostgreSQL', link: '/features/autonomous-agent/integrations/postgresql/' },
                    { label: 'MySQL', link: '/features/autonomous-agent/integrations/mysql/' },
                    // Debugging
                    { label: 'PDB', link: '/features/autonomous-agent/integrations/pdb/' },
                  ] },
                ] },
                { label: 'Code Completion', link: '/features/code-completion/' },
                { label: 'Context', link: '/features/context/' },
                { label: 'Fine-tuning', link: '/features/finetuning/' },
              ]
            },
          ],
        },
        {
          label: 'Guides',
          collapsed: true,
          items: [
            { label: 'Deployment',
              collapsed: true,
              items: [
                { label: 'Runpod Deployment', link: '/guides/deployment/runpod/' },
                { label: 'AWS Deployment', 
                  collapsed: true,
                  items: [
                  { label: 'Getting Started', link: '/guides/deployment/aws/getting-started/' },
                  { label: 'Launch from EC2', link: '/guides/deployment/aws/ec2/' },
                  { label: 'Launch from Website', link: '/guides/deployment/aws/marketplace/' },
                  { label: 'Usage', link: '/guides/deployment/aws/usage/' },
                ] },
             ] 
            },
            {
              label: 'Plugins',
              collapsed: true,
              items: [
                { label: 'JetBrains IDEs', 
                  collapsed: true,
                  items: [
                    { label: 'Troubleshooting', link: '/guides/plugins/jetbrains/troubleshooting/' },
                  ]
                },
              ]
            },
            { label: 'Authentication', 
              collapsed: true,
              items: [
                { label: 'Keycloak Integration', link: '/guides/authentication/keycloak/' },
              ]
            },
            { label: 'Version-specific Usage',
              collapsed: true,
              items: [
                { label: 'Self-hosted Refact',
                  collapsed: true,
                  items: [
                    { label: 'Self-hosted Refact', link: '/guides/version-specific/self-hosted/' }
                  ]
                },
                { label: 'Enterprise Refact', 
                  collapsed: true,
                  items: [
                    { label: 'Getting Started', link: '/guides/version-specific/enterprise/getting-started/' },
                    { label: 'License', link: '/guides/version-specific/enterprise/license/' },
                    { label: 'Users', link: '/guides/version-specific/enterprise/users/' },
                    { label: 'Model Hosting', link: '/guides/version-specific/enterprise/model-hosting/' },
                    { label: 'Plugins', link: '/guides/version-specific/enterprise/plugins/' },
                  ] 
                },
                { label: 'Refact Teams', link: '/guides/version-specific/teams/' },
              ]
            },
            { label: 'Reverse Proxy', link: '/guides/reverse-proxy/' },
          ]
        },
        {
          label: 'Supported Models',
          link: '/supported-models/',
        },
        {
          label: 'BYOK',
          link: '/byok/',
        },
        {
          label: 'FAQ',
          link: '/faq/',
        },
        // {
        //   label: 'Privacy',
        //   link: '/privacy/',
        // },
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