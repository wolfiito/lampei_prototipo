/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes'; // Si esto falla, usa la alternativa abajo

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: {
                    DEFAULT: '#1e40af', 
                    dark: '#1e3a8a',
                },
                accent: '#d97706',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            }
        },
	},
	plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    // En lugar de requerir el archivo, definimos los valores base 
                    // o usamos los nombres de temas estándar.
                    "color-scheme": "light",
                    "primary": "#1e40af",
                    "accent": "#d97706",
                    "base-100": "#f8fafc",
                    "info": "#0ea5e9",
                    "success": "#22c55e",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
        ],
    },
}