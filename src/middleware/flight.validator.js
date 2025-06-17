import { query, validationResult } from 'express-validator';

// Middleware for validating query parameters for /flightRoutes
export const validateQuery = [
    query('origin').isLength({ min: 3, max: 3 }).withMessage('origin must be a 3-letter airport code'),
    query('destination').isLength({ min: 3, max: 3 }).withMessage('destination must be a 3-letter airport code'),
    query('departureDate').isISO8601().withMessage('departureDate must be a valid date (YYYY-MM-DD)')
        .custom((value) => {
            const inputDate = new Date(value);
            const today = new Date();

            if (isNaN(inputDate.getTime())) {
                throw new Error('departureDate must be a valid date');
            }

            // Normalize both to ignore time
            inputDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            if (inputDate < today) {
                throw new Error('departureDate must be today or a future date');
            }

            return true;
        }),
    query('adults').isInt({ min: 1 }).withMessage('adults must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];