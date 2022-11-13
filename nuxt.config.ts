// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@vueuse/nuxt',
		'nuxt-icon',
	],
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		fallback: 'dark',
		classSuffix: '',
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US',
			},
			meta: [
				{ name: 'description', content: 'PIOI' },
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://use.typekit.net/soy0jkj.css',
				},
			],
		},
	},
},
)
