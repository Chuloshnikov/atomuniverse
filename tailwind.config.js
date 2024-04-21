import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
        contentContainer: "1280px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2x1": "1400px",
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026"
      },
      colors: {
        mainBg: "#FDF8F0",
        accentBg: "#582434",
        smouthText: "#B56767",
        accentBg2: "#B56774",
        ahornBg: "#EEE7F0",
      }
    },
  },
  plugins: []
}
export default config