
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Sora', 'ui-sans-serif', 'system-ui'],
				'sora': ['Sora', 'sans-serif'],
				'inter': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
			},
			letterSpacing: {
				'tightest': '-.04em',
				'tighter': '-.02em',
				'tight': '-.01em',
			},
			lineHeight: {
				'snug': '1.35',
				'tight': '1.2',
			},
			spacing: {
				'section': '3rem',
				'component': '1rem',
			},
			colors: {
				// Brand Colors as per spec
				brand: '#FF4444',
				ink: '#030303', 
				canvas: '#FDFDFD',
				'surface-muted': '#F8F9FA',
				
				// Universal Red Color - #FF4444 converted to HSL: 355° 100% 63%
				'universal-red': '#FF4444',
				
				// Coral Tint System Y1-Y5 as per design brief
				'coral-tint-1': '#FF6666',
				'coral-tint-2': '#FF8888', 
				'coral-tint-3': '#FFAAAA',
				'coral-tint-4': '#FFCCCC',
				'coral-tint-5': '#FFEEEE',
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				DEFAULT: '1rem' /* 16px as per design brief */
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
				},
				'textRotation': {
					'0%, 11.4%': { opacity: '0', transform: 'translateY(20%)' },
					'11.4%, 22.8%': { opacity: '1', transform: 'translateY(0)' },
					'34.2%, 45.6%': { opacity: '0', transform: 'translateY(-20%)' },
					'45.6%, 57%': { opacity: '1', transform: 'translateY(0)' },
					'68.4%, 79.8%': { opacity: '0', transform: 'translateY(-20%)' },
					'79.8%, 91.2%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' }
				},
				'pulse-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'lineDraw': {
					'to': { 'stroke-dashoffset': '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'textRotation': 'textRotation 10.5s infinite ease-in-out',
				'pulse-scale': 'pulse-scale 2s infinite ease-in-out',
				'lineDraw': 'lineDraw 0.5s forwards ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
