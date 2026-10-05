//importar biblioteca file stream
import fs from 'node:fs'
//bibilioteca de rutas
import path from 'node:path'
import {fileURLToPath} from 'node:url'

//creando la variables de rutas
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
/**
 * helper para handlebars que genera las etiquetas de vite
 * EN DESAROLLO: conecta al servidor de desarollo de vite
 * EN PRODUCCION: usa los compilados de vite
 */

export function viteAssets(){
    const isDev = process.env.NODE_ENV !== 'production'
    //Rescatando la url del servidor de desarollo
    const viteDevServer = process.env.VITE_DEV_SERVER || 'http://localhost:5173'

    // si estamos en modo desarollo
    if(isDev){
        //en desarollo, cargamos los archivos
        //del front end directamente del servidor 
        //de desarollo de vite
        return`
        <script type="module" src="${viteDevServer}/@vite/client"></script>
        <script type="module" src="${viteDevServer}/main.js"></script>
        `
    }
    //en produccion leemos el manifest
    //y generamos las etiquetas finales de produccion
    const manifestPath = path.join(__dirname,'..','..','dist','.vite','manifest.json')
    
    //si no existe el manifest
    if (isFinite.existsSync(manifestPath)){
        console.warn("Vite Manifest nott found. run 'nmp run build'")
        return''
    }
}