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
        },
        {
          tag: 'script',
          content: `
					!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
					posthog.init('phc_dhlxxMkxVCImmYtDh7gwD7y4EUbjus3iGNjaonPsJlO',{api_host:'https://data.smallcloud.ai'})
					`,
        },
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Quickstart', link: '/introduction/quickstart/' },
            {
              label: 'Features',
              items: [
                { label: 'AI Chat', link: '/features/ai-chat/' },
                { label: 'Code Completion', link: '/features/code-completion/' },
                { label: 'AI Toolbox', link: '/features/ai-toolbox/' },
              ]
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Self-hosted Refact', link: '/guides/self-hosted/' },
            { label: 'Enterprise Refact', link: '/guides/enterprise/' },
            { label: 'Refact Teams', link: '/guides/teams/' },
            { label: 'Reverse Proxy', link: '/guides/reverse-proxy/' },
            { label: 'Runpod Deployment', link: '/guides/runpod/' },
          ]
        },
        {
          label: 'Supported Models',
          link: '/supported-models/',
        },
        {
          label: 'FAQ',
          link: '/faq/',
        },
        {
          label: 'Privacy',
          link: '/privacy/',
        },
        {
          label: 'Contributing',
          link: '/contributing/',
        },
        {
          label: 'Changelog',
          link: '/changelog/',
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
