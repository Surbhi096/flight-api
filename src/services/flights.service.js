// Service that calls Amadeus flight search API
import axios from "axios";
import { URL } from "../config/config.js";

const fetchFlights = async ({ origin, destination, departureDate, adults, token }) => {
    const response = await axios.get(URL.flightOffers, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'X-HTTP-Method-Override': 'GET'
        },
        params: {
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate,
            adults,
            nonStop: false,
            max: 20,
            currencyCode: 'CAD'
        }
    });

    const offers = response.data.data;
    const dictionaries = response.data.dictionaries;

    const routes = offers.map(offer => {
        const flights = offer.itineraries[0].segments.map(segment => ({
            airline: segment.carrierCode,
            flightNumber: segment.number,
            scheduledDepartureTime: segment.departure.at.split('T')[1].slice(0, 5),
            scheduledArrivalTime: segment.arrival.at.split('T')[1].slice(0, 5)
        }));

        return {
            totalPrice: offer.price.total,
            currency: offer.price.currency,
            flights
        };
    });

    const cityCode = dictionaries.locations[destination].cityCode;

    return { routes, cityCode };
};

export default fetchFlights;