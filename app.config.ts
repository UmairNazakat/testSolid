import { defineConfig } from '@solidjs/start/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        preset: 'cloudflare-pages',
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
