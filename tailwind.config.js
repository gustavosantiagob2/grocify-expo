/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(138, 47%, 97%)",
          dark: "hsl(150, 31%, 9%)",
        },
        foreground: {
          DEFAULT: "hsl(146, 52%, 15%)",
          dark: "hsl(136, 42%, 92%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(146, 52%, 15%)",
          dark: "hsl(149, 27%, 12%)",
        },
        primary: {
          DEFAULT: "hsl(147, 75%, 33%)",
          foreground: "hsl(0, 0%, 100%)",
          dark: "hsl(142, 70%, 54%)",
        },
        secondary: {
          DEFAULT: "hsl(143, 61%, 91%)",
          foreground: "hsl(146, 55%, 24%)",
          dark: "hsl(149, 24%, 19%)",
        },
        muted: {
          DEFAULT: "hsl(140, 57%, 94%)",
          foreground: "hsl(146, 26%, 40%)",
          dark: "hsl(149, 18%, 16%)",
        },
        accent: {
          DEFAULT: "hsl(142, 72%, 84%)",
          dark: "hsl(146, 35%, 20%)",
        },
        destructive: {
          DEFAULT: "hsl(8, 100%, 97%)",
          foreground: "hsl(6, 74%, 54%)",
          dark: "hsl(8, 55%, 16%)",
        },
        border: {
          DEFAULT: "hsl(141, 47%, 83%)",
          dark: "hsl(149, 16%, 24%)",
        },
        input: {
          DEFAULT: "hsl(141, 47%, 83%)",
          dark: "hsl(149, 16%, 24%)",
        },
        ring: {
          DEFAULT: "hsl(146, 75%, 45%)",
          dark: "hsl(145, 72%, 56%)",
        },
        success: {
          DEFAULT: "hsl(146, 80%, 40%)",
          dark: "hsl(146, 70%, 52%)",
        },
        priority: {
          low: {
            DEFAULT: "hsl(142, 70%, 18%)", // fundo verde escuro
            foreground: "hsl(142, 60%, 55%)", // texto verde claro
          },
          medium: {
            DEFAULT: "hsl(35, 60%, 18%)", // fundo laranja escuro
            foreground: "hsl(35, 80%, 55%)", // texto laranja
          },
          high: {
            DEFAULT: "hsl(6, 55%, 20%)", // fundo vermelho escuro
            foreground: "hsl(6, 74%, 54%)", // texto vermelho
          },
        },
      },
    },
  },
  plugins: [],
};
