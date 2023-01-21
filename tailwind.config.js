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
			keyframes: {
				expand: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' },
				}
			},
			animation: {
				expand: 'expand 0.5s ease-in-out',
			},
			colors: {
				error: '#fa5152'
			}
		},
	},
}
