// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   darkMode: 'class', // Must be 'class' to work with class toggling
// //   content: [
// //     './app/**/*.{js,ts,jsx,tsx}',
// //     './components/**/*.{js,ts,jsx,tsx}',
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };

// // tailwind.config.ts
// export default {
//   darkMode: 'class',
//   // other config
// };

// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // darkMode: 'class', // Enables toggling dark mode via 'class' on <html> or <body>
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
