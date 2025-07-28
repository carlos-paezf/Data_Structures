import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'Estructuras de Datos y Algoritmos',
	tagline: 'Aprende Estructuras de Datos y Algoritmos',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://carlos-paezf.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/Data_Structures/',
	trailingSlash: false,

	// GitHub pages deployment dir.
	deploymentBranch: 'gh-pages',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'carlos-paezf', // Usually your GitHub org/user name.
	projectName: 'Data_Structures', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'es',
		locales: [ 'es', 'en' ],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: [ 'rss', 'atom' ],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Estructuras de Datos y Algoritmos',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Conoce la Teoría',
				},
				// { to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/carlos-paezf/Data_Structures',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				/* {
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'X',
							href: 'https://x.com/docusaurus',
						},
					],
				},*/
				{
					title: 'More',
					items: [
						{
							label: 'Object Oriented Programming Intersemester',
							href: 'https://carlos-paezf.github.io/Object_Oriented_Programming_Intersemester'
						},
						{
							label: 'JS and TS In-depth Elective',
							href: 'https://carlos-paezf.github.io/JS_and_TS_In-depth_Elective'
						},
						{
							label: 'Software Construction',
							href: 'https://carlos-paezf.github.io/Software_Construction/',
						},
					],
				},
			],
			copyright: `Copyright © ${ new Date().getFullYear() } Carlos David Páez. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: [ "java" ]
		},
		// Improve SEO
		metadata: [
			{ name: 'keywords', content: 'data structures, academic, explanation, university, algorithms, computer science, java, javascript, python, typescript, documentation' },
			{ name: 'twitter:card', content: 'summary_large_image' },
		],
	} satisfies Preset.ThemeConfig,

	// Enable the mermaid theme for markdown
	markdown: {
		mermaid: true
	},

	themes: [
		'@docusaurus/theme-mermaid',
		'@docusaurus/theme-live-codeblock'
	],
};

export default config;
