import { query, validationResult } from 'express-validator';

// Middleware for validating query parameters for /flightRoutes
export const validateQuery = [
    query('origin').isLength({ min: 3, max: 3 }).withMessage('origin must be a 3-letter airport code'),
    query('destination').isLength({ min: 3, max: 3 }).withMessage('destination must be a 3-letter airport code'),
    query('departureDate').isISO8601().withMessage('departureDate must be a valid date (YYYY-MM-DD)'),
    query('adults').isInt({ min: 1 }).withMessage('adults must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];