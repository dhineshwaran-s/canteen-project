const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String }
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderId: { type: String },
    orderItems: [orderItemSchema],
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'ready', 'delivered'],
        default: 'pending'
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
