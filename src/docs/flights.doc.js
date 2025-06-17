/**
 * @swagger
 * /flightRoutes:
 *   get:
 *     summary: Get flight routes and nearby hotels
 *     tags:
 *       - Flights
 *     description: Fetches flight options between two airports and hotels near the destination
 *     parameters:
 *       - in: query
 *         name: origin
 *         schema:
 *           type: string
 *         required: true
 *         description: 3-letter origin airport code (IATA)
 *       - in: query
 *         name: destination
 *         schema:
 *           type: string
 *         required: true
 *         description: 3-letter destination airport code (IATA)
 *       - in: query
 *         name: departureDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Departure date in YYYY-MM-DD format
 *       - in: query
 *         name: adults
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: Number of adult passengers
 *     responses:
 *       200:
 *         description: Successful response with flights and hotels
 *         content:
 *           application/json:
 *             example:
 *               origin: YUL
 *               destination: YYZ
 *               departureDate: 2025-06-10
 *               routes:
 *                 - totalPrice: 345.67
 *                   currency: CAD
 *                   flights:
 *                     - airline: AC
 *                       flightNumber: 123
 *                       scheduledDepartureTime: "09:00"
 *                       scheduledArrivalTime: "10:00"
 *               hotels:
 *                 - name: Hotel Plaza
 *       400:
 *         description: Invalid query parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                       msg:
 *                         type: string
 *                       path:
 *                         type: string
 *                       location:
 *                         type: string
 *             example:
 *               errors:
 *                 - type: field
 *                   msg: origin must be a 3-letter airport code
 *                   path: origin
 *                   location: query
 *                 - type: field
 *                   msg: destination must be a 3-letter airport code
 *                   path: destination
 *                   location: query
 *                 - type: field
 *                   msg: departureDate must be a valid date (YYYY-MM-DD)
 *                   path: departureDate
 *                   location: query
 *                 - type: field
 *                   msg: departureDate must be a valid date
 *                   path: departureDate
 *                   location: query
 *                 - type: field
 *                   msg: adults must be a positive integer
 *                   path: adults
 *                   location: query
 *       500:
 *         description: Failed to fetch flight or hotel data
 *         content:
 *           application/json:
 *             example:
 *               error: Server error fetching flight and hotel data.
*/