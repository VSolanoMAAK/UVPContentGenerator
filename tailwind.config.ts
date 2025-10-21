import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}','./src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: { 'glass': '0 8px 30px rgba(0,0,0,0.18)' }
    }
  },
  plugins: []
};
export default config;
