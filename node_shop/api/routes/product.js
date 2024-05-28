const express = require('express');
const router = express.Router();

// Handling GET requests to /products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    });
});

// Handling POST requests to /products
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /products"
    });
});

module.exports = router;
