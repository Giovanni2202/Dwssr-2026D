import tailwindcss from '@tailwindcss/vite'; // 👈 Importa Tailwind
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    root: 'src',
    plugins: [
        tailwindcss(), // 👈 Habilita el procesamiento de Tailwind
    ],
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        cors: {
            origin: '*',
            methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
        },
        hmr: {
            clientPort: 443
        }
    },
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/main.js')
            }
        },
    },
    publicDir: false
})