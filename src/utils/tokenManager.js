// Handles fetching and caching of Amadeus API access_token
import axios from "axios";
import { URL, CLIENT_ID, CLIENT_SECRET } from "../config/config.js";

let cachedToken = null;
let tokenExpiry = null;

const getAccessToken = async () => {
    // Return cached token if not expired
    if (cachedToken && tokenExpiry && tokenExpiry > Date.now()) {
        return cachedToken;
    }

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);

    // Request new token from API
    const { data } = await axios.post(URL.token, params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    cachedToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;

    return cachedToken;
};

export default getAccessToken;
