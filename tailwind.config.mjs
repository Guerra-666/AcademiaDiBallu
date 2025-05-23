/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx}',
	],
	theme: {
	  extend: {
		animation: {
		  border: 'background ease infinite',
		  'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
		},
		keyframes: {
		  background: {
			'0%, 100%': { backgroundPosition: '0% 50%' },
			'50%': { backgroundPosition: '100% 50%' },
		  },
		  fadeInUp: {
			'0%': {
			  opacity: 0,
			  transform: 'translateY(20px)',
			},
			'100%': {
			  opacity: 1,
			  transform: 'translateY(0)',
			},
		  },
		},
	  },
	},
	plugins: [],
  }