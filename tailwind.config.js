module.exports = {
	// When Tailwind 1.2 is ready, the screen settings will be available as part of tailwindcss-plugin-fancy.
	theme: {
		extend: {
			screens: {
				dark: {raw: '(prefers-color-scheme: dark)'},
				light: {raw: '(prefers-color-scheme: light)'}
			}
		}
	},
	variants: {},
	plugins: [
		require('tailwindcss-plugin-fancy')
	]
};
