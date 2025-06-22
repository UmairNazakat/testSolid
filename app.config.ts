// import { defineConfig } from '@solidjs/start/config';

// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//     server: {
//         preset: 'cloudflare-pages',
//     },
//     vite: {
//         plugins: [tailwindcss()],
//     },
// });



import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from 'solid-start-vercel';

export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});

