const express = require('express');
const router = express.Router();

// Include necessary middlewares and controllers here

router.get('/:propertyId', (req, res) => {
    // Fetch reviews for a specific property
});

router.post('/:propertyId', (req, res) => {
    // Post a review for a specific property
});

module.exports = router;
