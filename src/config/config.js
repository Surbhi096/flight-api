// Centralized config and URL builders
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.BASE_URL;

export const URL = {
    token: `${BASE_URL}/v1/security/oauth2/token`,
    flightOffers: `${BASE_URL}/v2/shopping/flight-offers`,
    hotelsByCity: `${BASE_URL}/v1/reference-data/locations/hotels/by-city`,
};
export const PORT = process.env.PORT || 4000;
export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;

