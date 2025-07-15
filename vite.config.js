import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
import i18n from 'laravel-vue-i18n/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
        i18n(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            ziggy: path.resolve('vendor/tightenco/ziggy/dist/index.esm.js'),
        }
    },
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
});
