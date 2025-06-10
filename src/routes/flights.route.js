// Defines routing logic for /flightRoutes
import { Router } from "express";
import { validateQuery } from "../middleware/flight.validator.js";
import { flightsController } from "../controllers/flights.controller.js";

const flightRoutes = Router();

// Apply validation before reaching controller logic
flightRoutes.get("/", validateQuery, flightsController)

export default flightRoutes;