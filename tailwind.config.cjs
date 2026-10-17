/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
			},
		},
		screens: {
			'xs': '320px',
			'sm': '480px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px',
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Colores regionales de Comarapa
				comarapa: {

					'dark': '#0D47A1',     // Azul oscuro de Comarapa
					'medium': '#2196F3',   // Azul cielo medio
					'light': '#64B5F6',    // Celeste claro/accent
					'white': '#FFFFFF',    // Blanco principal
					'gray': '#E3F2FD',     // Gris claro para backgrounds

				},
				ink: '#0A1A3A',            // Azul marino profundo para textos y fondos oscuros
				whatsapp: {
					DEFAULT: '#16A34A',
					dark: '#15803D',
				},
				// Compatibilidad con shadcn/ui
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {

					DEFAULT: '#0D47A1',  // Azul oscuro de Comarapa
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#2196F3',  // Azul cielo medio de Comarapa
					foreground: '#FFFFFF',
				},
				accent: {
					DEFAULT: '#64B5F6',  // Celeste claro claro de Comarapa

					foreground: '#2D5A27',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'2xs': '0.625rem',
			},
			minHeight: {
				'touch': '44px',
			},
			minWidth: {
				'touch': '44px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}