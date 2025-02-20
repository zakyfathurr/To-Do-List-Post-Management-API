const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "To-do List Management Posts API",
            version: "1.0.0",
            description: "Dokumentasi API menggunakan Swagger",
            contact:{
                name: "Zaky Fathurrahman",
                email: "zakyfathurrahman2802@gmail.com",
                url: "https://github.com/zakyfathurr",
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
