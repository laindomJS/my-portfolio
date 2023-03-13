/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ['Merriweather Sans', 'sans-serif'],
				work: ['Work Sans', 'sans-serif'],
			},
			backgroundImage: {
				'pattern-desktop': "url('/assets/qqquad.svg')",
			}
		},
	},
	plugins: [],
}
