// Service that calls Amadeus hotel list API
import axios from "axios";
import { URL } from "../config/config.js";

const fetchHotels = async (cityCode, token) => {
    const response = await axios.get(URL.hotelsByCity, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            cityCode,
            radius: 50,
            radiusUnit: 'KM',
            hotelSource: 'ALL'
        }
    });

    return response.data.data.map(hotel => ({
        name: hotel.name
    }));
};

export default fetchHotels;