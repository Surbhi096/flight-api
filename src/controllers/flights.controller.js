// Controller that handles logic after validation passes
import getAccessToken from "../utils/tokenManager.js";
import fetchFlights from "../services/flights.service.js";
import fetchHotels from "../services/hotel.service.js";

export const flightsController = async (req, res) => {
    try {
        const { origin, destination, departureDate, adults } = req.query;

        // Get token from API (cached)
        const token = await getAccessToken();

        // Fetch flights & extract cityCode
        const { routes, cityCode } = await fetchFlights({ origin, destination, departureDate, adults, token });

        // Use cityCode to get hotels near destination
        const hotels = await fetchHotels(cityCode, token);

        res.json({ origin, destination, departureDate, routes, hotels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error fetching flight and hotel data.' });
    }
}
