import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    // directorio raiz de los archivos fuente del front end
    root: 'src',
    // configuracion de servidor
    server: {
        host: true, // 👈 Obligatorio para evitar el error 502 en Codespaces
        port: 5173,
        strictPort: true,
        cors: true, // 👈 Añade esto para permitir peticiones entre los puertos de Codespaces
        hmr: {
            clientPort: 443 // 👈 Permite que el proxy de Codespaces maneje los WebSockets
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