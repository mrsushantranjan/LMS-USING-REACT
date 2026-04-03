const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const { createOrder, verifyPayment, getMyOrders } = require("../controllers/payment.controller");

router.post("/create-order", requireAuth, syncUser, createOrder);   // POST /api/payment/create-order
router.post("/verify",       requireAuth, syncUser, verifyPayment); // POST /api/payment/verify
router.get("/my-orders",     requireAuth, syncUser, getMyOrders);   // GET  /api/payment/my-orders

module.exports = router;