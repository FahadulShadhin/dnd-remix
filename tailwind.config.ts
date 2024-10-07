import type { Config } from "tailwindcss";

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F0F4F8',
					100: '#D9E2EC',
					200: '#BCCCDC',
					300: '#9FB3C8',
					400: '#829AB1',
					500: '#627D98', // This will be our primary text color
					600: '#486581',
					700: '#334E68',
					800: '#243B53',
					900: '#102A43',
				},
				peach: {
					50: '#FFF5EE',
					100: '#FFEADD',
					200: '#FFD5BB',
					300: '#FFCFB3', // Original
					400: '#FFBA8C',
					500: '#FFA666',
					600: '#FF9240',
					700: '#FF7D1A',
					800: '#F26800',
					900: '#CC5700',
				},
				cream: {
					50: '#FFFEF7',
					100: '#FEFDF0',
					200: '#FEF9D9', // Original
					300: '#FDF5C2',
					400: '#FCF1AB',
					500: '#FBEC94',
					600: '#FAE77D',
					700: '#F9E266',
					800: '#F8DE4F',
					900: '#F7D938',
				},
				dndGreen: {
					50: '#F0F9F3',
					100: '#E1F3E7',
					200: '#C3E7CF',
					300: '#A1D6B2', // Original
					400: '#7FC495',
					500: '#5DB278',
					600: '#3B9F5B',
					700: '#2A8C47',
					800: '#1A7A33',
					900: '#0A671F',
				},
			},
			fontFamily: {
				sans: [
					'"Inter"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [],
} satisfies Config;
