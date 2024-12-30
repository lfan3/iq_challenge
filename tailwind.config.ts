import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT"



const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-red',
    'bg-yellow',
    'bg-orange',
    'bg-lime',
    'bg-green',
    'bg-cyan',
    'bg-sky',
    'bg-blue',
    'bg-indigo',
    'bg-purple',
    'text-red',
    'text-yellow',
    'text-orange',
    'text-lime',
    'text-green',
    'text-cyan',
    'text-sky',
    'text-blue',
    'text-indigo',
    'text-purple',
    'text-red-600',
    'text-yellow-600',
    'text-orange-600',
    'text-lime-600',
    'text-green-600',
    'text-cyan-600',
    'text-sky-600',
    'text-blue-600',
    'text-indigo-600',
    'text-purple-600',

    'hover:bg-red-600',
    'hover:bg-yellow-600',
    'hover:bg-orange-600',
    'hover:bg-lime-600',
    'hover:bg-green-600',
    'hover:bg-cyan-600',
    'hover:bg-sky-600',
    'hover:bg-blue-600',
    'hover:bg-indigo-600',
    'hover:bg-purple-600',

    'active:bg-red-600',
    'active:bg-yellow-600',
    'active:bg-orange-600',
    'active:bg-lime-600',
    'active:bg-green-600',
    'active:bg-cyan-600',
    'active:bg-sky-600',
    'active:bg-blue-600',
    'active:bg-indigo-600',
    'active:bg-purple-600',

    'focus:bg-red-600',
    'focus:bg-yellow-600',
    'focus:bg-orange-600',
    'focus:bg-lime-600',
    'focus:bg-green-600',
    'focus:bg-cyan-600',
    'focus:bg-sky-600',
    'focus:bg-blue-600',
    'focus:bg-indigo-600',
    'focus:bg-purple-600',

    'focus:ring-red-300',
    'focus:ring-yellow-300',
    'focus:ring-orange-300',
    'focus:ring-lime-300',
    'focus:ring-green-300',
    'focus:ring-cyan-300',
    'focus:ring-sky-300',
    'focus:ring-blue-300',
    'focus:ring-indigo-300',
    'focus:ring-purple-300',

    'border-red',
    'border-yellow',
    'border-orange',
    'border-lime',
    'border-green',
    'border-cyan',
    'border-sky',
    'border-blue',
    'border-indigo',
    'border-purple',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red:{
          DEFAULT:'#ef4444',
        },
        orange:{
          DEFAULT:"#f97316",
          600:"#ea580c"
        },
        yellow:{
          DEFAULT: "#eab308",
          600:'#ca8a04'
        },
        lime:{
          DEFAULT:"#84cc16",
          600:'#65a30d'
        },
        green:{
          DEFAULT: "#22c55e",
          600:'#16a34a'
        },
        cyan:{
          DEFAULT: "#06b6d4",
          600:'#0891b2'
        },
        sky:{
          DEFAULT:"#0ea5e9",
          600:'#0284c7'
        },
        blue:{
          DEFAULT:"#3b82f6",
          600:'#2563eb'
        },
        indigo:{
          DEFAULT:"#6366f1",
          600:'#4f46e5'
        },
        purple:{
          DEFAULT:"#a855f7",
          600:'#9333ea'
        },
      },
   
      keyframes: {
        rotateAndFade: {
          '0%': { transform: 'rotate(0deg)', opacity: '1' },
          '50%': { transform: 'rotate(180deg)',opacity: '0.5' },
          '100%':{ transform: 'rotate(360deg)',opacity: '0' }
        }
      },
      animation: {
        "rotate-and-fade": 'rotateAndFade 2s forwards',
      }
    },
  },
  plugins: [],
});
export default config;
