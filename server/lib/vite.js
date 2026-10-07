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

    //leyendo y parseando a JSON el archivo
    //de manifiesto que genera vite en la compilacion
    //de los archivos del front end
    const manifest =JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    //obteniendo la ruta del punto de entrada del front-end
    const mainEntry =manifest['main.js']
    //guarda el main.js
    if(!mainEntry){
        console.warn('Archivo main.js no esta disponible en el manifiesto de vite')
        return''
    }
    let tags=''

    //Css File
    if (mainEntry.css){
        mainEntry.css.forEach(cssfiles=>{
            tags+= `<link rel="stylesheet" href="/${cssfiles}">\n`
        });
    }

    //Js files
    tags+=`<script type="module" scr="/${mainEntry.file}" defer></script>`;

    return tags;
    
}
/*
    *Funcion registradora del Helper de Handlebars
    */
export function registrerViteHelper(hbs){
    hbs.registrerHelper('ViteAssets',()=>{
        return new hbs.SafesString(viteAssets ())
    })
   }