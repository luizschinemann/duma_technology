import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rust: "#A54633",   // primária
        brand: "#1F4E65",  // secundária
        cream: "#F4EFE6",
        ink: "#0F172A",
        muted: "#6B7280"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "Arial"
        ]
      }
    }
  },
  plugins: []
};

export default config;
