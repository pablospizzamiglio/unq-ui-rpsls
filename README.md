# Rock Paper Scissors Lizard Spock

## Demo

Hay una demo del proyecto en funcionamiento disponible en el siguiente [link](https://pablospizzamiglio.github.io/unq-ui-pablo-spizzamiglio-trabajo-final/).

## Requerimientos

En Windows descargar e instalar:

- [Node.js LTS](https://nodejs.org/en/)
- [git](https://git-scm.com/)

En Ubuntu 20.04 LTS ejecutar en una consola:

```bash
sudo apt install nodejs npm git
```

Para ambos sistemas operativos, ejecutar en una consola:

```bash
git clone https://github.com/pablospizzamiglio/unq-ui-pablo-spizzamiglio-trabajo-final.git
```

O con SSH:

```bash
git clone git@github.com:pablospizzamiglio/unq-ui-pablo-spizzamiglio-trabajo-final.git
```

## Comandos

### `npm install`

Descarga e instala todas las dependencias del proyecto creando el directorio `node_modules`.\
Es el primer comando que necesita ser ejecutado antes de poder correr la aplicación localmente. Debe hacerse la primera vez y luego de cada `git pull` que traiga consigo cambios en los archivos `package.json` y `package-lock.json` ya que podrían contener nuevas dependencias o versiones actualizadas de las mismas.

### `npm start`

Ejecuta la aplicación localmente en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizarla en el navegador.

La página será recargada con cada cambio y además se podrán visualizar errores detectados en la consola.

### `npm run build`

Prepara la aplicación para su publicación dejándola en el directorio `build`.\
Crea un paquete React en modo producción y lo optimiza para obtener un mejor desempeño.

### `npm run deploy`

Ejecuta `npm run build` y luego `gh-pages -d build` para publicar la aplicación en [GitHub Pages](https://pages.github.com/).
