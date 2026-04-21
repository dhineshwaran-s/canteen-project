const express = require('express');
const router = express.Router();
const { addOrderItems, getOrders, prepareOrder, readyOrder, deliverOrder } = require('../controllers/orderController');
const { protect, chef, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, addOrderItems).get(protect, getOrders);
router.route('/:id/prepare').put(protect, chef, prepareOrder);
router.route('/:id/ready').put(protect, chef, readyOrder);
router.route('/:id/deliver').put(protect, deliverOrder); // could be admin or chef

module.exports = router;
