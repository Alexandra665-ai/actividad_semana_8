# Actividad 2.4 - Integración de Node.js + Express

## Objetivo

Implementar un backend mínimo utilizando Node.js y Express, integrando rutas GET y POST, controladores, servicios, middleware y conexión con base de datos MySQL.

## Estructura del proyecto

- app.js: archivo principal del servidor.
- db: conexión a la base de datos.
- routes: rutas del backend.
- controllers: controladores de las rutas.
- services: validación y procesamiento de datos.
- data: consultas a la base de datos.
- middlewares: middleware logger.
- public: formulario HTML y script frontend.
- evidencias: capturas del funcionamiento.

## Cómo ejecutar y utilizar el proyecto

Abrir MySQL Workbench y crear la base de datos `formularioDB`. Luego ejecutar las consultas para crear la tabla `contactos`:

```sql
CREATE DATABASE formularioDB;

USE formularioDB;

CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    mensaje TEXT
);
```

Abrir el proyecto en Visual Studio Code e instalar las dependencias:
- npm install
Ejecutar el servidor:
- node app.js
Abrir en el navegador:
- http://localhost:3000
Completar el formulario y presionar "Enviar". Los datos registrados se pueden revisar en:
- http://localhost:3000/contactos