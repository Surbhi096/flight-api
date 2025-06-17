import { Router } from "express";
import flightRoutes from "./flights.route.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../config/swagger.js";

const routes = Router();

routes.get("/health", (req, res) => {
    res.json({ status : 'OK'})
})

routes.use("/flightRoutes", flightRoutes);

// Swagger docs
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default routes;