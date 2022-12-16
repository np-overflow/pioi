const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			screens: {
				xs: '350px',
			},
			content: {
				default: '""',
			},
			fontFamily: {
				sans: ['darkmode-mono-on', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
