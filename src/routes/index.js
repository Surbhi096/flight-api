import { Router } from "express";
import flightRoutes from "./flights.route.js";

const routes = Router();

routes.get("/health", (req, res) => {
    res.json({ status : 'OK'})
})

routes.use("/flightRoutes", flightRoutes);

export default routes;