const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private (Customer)
const addOrderItems = async (req, res) => {
    const { orderId, orderItems, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({ message: 'No order items' });
        return;
    } else {
        const order = new Order({
            user: req.user._id,
            orderId,
            orderItems,
            totalPrice
        });

        const createdOrder = await order.save();

        // Emit socket event for chefs and admins
        const io = req.app.get('socketio');
        io.emit('newOrder', createdOrder);

        res.status(201).json(createdOrder);
    }
};

// @desc    Get all orders (Chef & Admin) or User's orders
// @route   GET /api/orders
// @access  Private
const getOrders = async (req, res) => {
    try {
        if (req.user.role === 'Customer') {
            const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
            res.json(orders);
        } else if (req.user.role === 'Chef') {
            // Chef sees pending, preparing, ready
            const orders = await Order.find({ status: { $in: ['pending', 'preparing', 'ready'] } }).sort({ createdAt: -1 });
            res.json(orders);
        } else {
            // Admin sees all
            const orders = await Order.find({}).sort({ createdAt: -1 });
            res.json(orders);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Helper for emitting real time events
const emitOrderStatus = (app, order) => {
    const io = app.get('socketio');
    io.emit('orderStatusUpdated', order);
};

// @desc    Start preparing order
// @route   PUT /api/orders/:id/prepare
// @access  Private (Chef)
const prepareOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.status = 'preparing';
            const updatedOrder = await order.save();
            emitOrderStatus(req.app, updatedOrder);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Mark order as ready
// @route   PUT /api/orders/:id/ready
// @access  Private (Chef)
const readyOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.status = 'ready';
            const updatedOrder = await order.save();
            emitOrderStatus(req.app, updatedOrder);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Mark order as delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private (Admin/Chef)
const deliverOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.status = 'delivered';
            const updatedOrder = await order.save();
            emitOrderStatus(req.app, updatedOrder);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addOrderItems, getOrders, prepareOrder, readyOrder, deliverOrder };
