/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '960px',
  		xl: '1200px'
  	},
  	fontFamily: {
  		primary: [
  			'Poiret One',
  			'sans-serif'
  		],
  		secondary: [
  			'Montserray',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			primary: '#050206',
  			secondary: '#ffffff',
  			luxury: '#9A8174',
  			elegant: '#3B3B3B',
  			accent: {
  				DEFAULT: '#5597d4',
  				hover: '#327EC4'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
