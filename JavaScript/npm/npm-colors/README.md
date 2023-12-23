# Pasos para iniciar el proyecto

1. Crear una carpeta llamada colors
2. Crear un archivo `main.js`

## npm desde CLI

3. Iniciamos un proyecto desde npm con el comando

```sh
npm init -y
```

4. Buscamos el package colors y lo instalamos con el comando

```sh
npm i colors
```

5. Dentro del archivo `main.js` vamos a imoprtar el paquete de colors con la linea de codigo

```javascript
const colors = require("colors");
```

6. Implementar las funciones de colors (estilos para el texto de la terminal) en el `main.js`. Para ello, hay que consultar la documentacion oficial de colors en [https://npmjs.com]
7. Para ejecutar el package, utilizamos el comando

```sh
node archivo.js
```

8. Eliminar (desinstalar) modulos de npm

```sh
npm uninstall colors
```
