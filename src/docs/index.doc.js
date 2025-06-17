/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns application health status
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is up and running
 *         content:
 *           application/json:
 *             example:
 *               status: OK
 */
