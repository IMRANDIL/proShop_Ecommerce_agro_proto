import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

export const orderItemById = asyncHandler(async (req, res) => {
  const orderItem = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (orderItem) {
    res.json(orderItem);
  } else {
    res.status(404);
    throw new Error("Order not found!");
  }
});

//update order pay...private.../api/orders/:id/pay

export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const orderItem = await Order.findById(req.params.id);

  if (orderItem) {
    orderItem.isPaid = true;

    orderItem.paidAt = Date.now();

    orderItem.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await orderItem.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found!");
  }
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private

export const getUserOrder = asyncHandler(async (req, res) => {
  const orderItems = await Order.find({ user: req.user._id });
  res.json(orderItems);
});
