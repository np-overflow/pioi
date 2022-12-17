// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/content',
		'@vueuse/nuxt',
		'nuxt-icon',
	],
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
			bodyAttrs: {
				class: 'bg-[#0c0c0c]',
			},
		},
	},
	runtimeConfig: {
		notionKey: '',
		notionDB: '',
	},
},
)
