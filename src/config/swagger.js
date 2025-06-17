// src/docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import { PORT } from "./config.js";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Flight + Hotel Search API',
      version: '1.0.0',
      description: 'API to fetch flight offers and hotels using Amadeus API'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Local Server'
      }
    ]
  },
  apis: ['./src/docs/*.js'],
};

export default swaggerJSDoc(options);
