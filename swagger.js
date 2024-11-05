// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Libros',
        version: '1.0.0',
        description: 'Documentación de la API de Libros'
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Servidor local'
        }
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, './app/routers/**/*.js')], // Rutas a los archivos de rutas
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};
