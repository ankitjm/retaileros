import { defineConfig } from 'vite';

export default defineConfig({
    // Base path — served at retaileros.in/app
    base: '/app/',

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3006',
                changeOrigin: true
            }
        }
    },

    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
});
