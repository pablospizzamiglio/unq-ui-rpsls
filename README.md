# Rock Paper Scissors Lizard Spock

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

Descarga e instala todas las dependencias del proyecto creando el directorio `node_modules`.
Este comando debe ser ejecutado luego de clonar el proyecto y volver a hacerlo si el archivo `package.json` es actualizado.

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizarla en el navegador.

La página será recargada con cada cambio.\
También se podrán visualizar errores detectados en la consola.

### `npm run build`

Prepara la aplicación para su publicación dejándola en el directorio `build`.\
Crea un paquete React en modo producción y lo optimiza para obtener un mejor desempeño.
