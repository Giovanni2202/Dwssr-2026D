//importando configuracion de vite
import {defineConfig} from 'vite'
//importando un admin de rutas
import {resolve} from 'node:path'

export default defineConfig({
    //directorio raiz de los archivos fuente del front end
    root: 'src',
    //configurador un servidor de dsarollo 
    server:{
        //puerto de escucha
        port: 5173,
        //rigidez del puerto
        strict:true,
    },
    //configuracion de build
    build:{
        //directorio de salida del js para produccion
        outDir:"../dist",
        //asegurando limpieza del folder de produccion 
        emptyOutDir:true,
        //genera manifiesto para el servidor
        manifest: true,
        //opciones de empaquetado
        rolldownOptions:{
            Input:{
                main:resolve(__dirname, 'src/main.js')
            }
        },
    },
    publicDir:false
})