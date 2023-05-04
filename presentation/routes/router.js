const express = require('express');
const router = express.Router();
const restaurantRoutes = require('./restaurants');
const productRoutes = require('./products');

// Mount your route files to the router object
router.use('/restaurants', restaurantRoutes);
router.use('/products', productRoutes);

module.exports = router;