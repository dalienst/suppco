/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			jungleGreen: '#1b5e20',
  			lightGreen: '#33691e',
  			jungle800: '#2e7d32',
  			jungle200: '#a5d6a7',
  			jungle100: '#c8e6c9',
  			jungle600: '#43a047',
  			jungle700: '#388e3c',
  			jungle50: '#e8f5e9',
  			gray: '#f5f5f5',
  			light500: '#8bc34a',
  			light600: '#7cb342',
  			light700: '#689f38',
  			light800: '#558b2f',
  			light900: '#33691e',
  			blue900: '#0d47a1',
  			blue800: '#1565c0',
  			blue700: '#1976d2',
  			blue600: '#1e88e5',
  			blue500: '#2196f3',
  			blue400: '#42a5f5',
  			blue300: '#64b5f6',
  			blue200: '#90caf9',
  			blue100: '#bbdefb',
  			blue50: '#e3f2fd',
  			lightBlue900: '#01579b',
  			lightBlue800: '#0277bd',
  			lightBlue700: '#0288d1',
  			lightBlue600: '#039be5',
  			lightBlue500: '#03a9f4',
  			lightBlue400: '#29b6f6',
  			lightBlue300: '#4fc3f7',
  			lightBlue200: '#81d4fa',
  			lightBlue100: '#b3e5fc',
  			lightBlue50: '#e2e9ed',
  			textColorBlack: '#281d1d',
  			textColorBhite: '#ffffff',
  			grayBlue: '#141a30',
  			lightGrayBlue: '#242e49',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
