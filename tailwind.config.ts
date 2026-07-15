import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0D14",       // deep navy-black background
        surface: "#12151F",    // card / panel surface
        surface2: "#1A1E2B",   // elevated surface (hover states)
        line: "#232837",       // hairline borders
        ink: "#E7E9EE",        // primary text
        muted: "#8B92A6",      // secondary text
        accent: "#FFB454",     // warm amber — signature accent
        accent2: "#6C8CFF",    // cool indigo — secondary accent
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
