import { extendTheme } from '@chakra-ui/react'
import { StepsTheme as Steps } from "chakra-ui-steps";

const theme = extendTheme({
	fonts: {
		heading: `Work Sans`,
		body: `Work Sans`,
	},

	components: {
		Steps,
	},

	colors: {
		brand: {
			500: '#323232',
		},
		primary: {
			50: '#ffe5f4',
			500: '#ce0078',
			600: '#e80388',
		},
		secondary: {
			500: '#121619',
		},
		accent: {
			500: '#ce0078',
		},
		greyText: {
			500: '#8B96A5',
		},
		white: {
			500: '#ffffff',
		},
		status: {
			pending: '#F4BF4F',
			success: '#037400',
			cancelled: '#CE0000',
		}
	},

	textStyles: {
		xs: {
			fontSize: ['12px'],
			fontWeight: 'normal',
			lineHeight: '130%',
		},
		'2xs': {
			fontSize: ['14px'],
			fontWeight: 'normal',
			lineHeight: '130%',
		},
		sm: {
			fontSize: ['16px'],
			fontWeight: 'normal',
			lineHeight: '150%',
		},
		md: {
			fontSize: ['20px'],
			fontWeight: 'semibold',
			lineHeight: '130%',
		},
		'2md': {
			fontSize: ['24px'],
			fontWeight: 'semibold',
			lineHeight: '130%',
		},
		lg: {
			fontSize: ['28px'],
			fontWeight: 'semibold',
			lineHeight: '110%',
		},
		'2lg': {
			fontSize: ['32px'],
			fontWeight: 'semibold',
			lineHeight: '110%',
		},
		xl: {
			fontSize: ['36px'],
			fontWeight: 'bold',
			lineHeight: '110%',
		},
		'2xl': {
			fontSize: ['44px'],
			fontWeight: 'bold',
			lineHeight: '110%',
		},
		'3xl': {
			fontSize: ['52px'],
			fontWeight: 'bold',
			lineHeight: '110%',
		},
	},

	fontSizes: {
		xs: '12px',
		sm: '16px',
		md: '20px',
		lg: '28px',
		xl: '36px',
		'2xl': '44px',
		'3xl': '52px',
	},
	breakpoints: {
		sm: '420px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
		'2xl': '1536px',
	},
})

export default theme
