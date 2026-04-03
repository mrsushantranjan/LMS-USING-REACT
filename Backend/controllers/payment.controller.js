const crypto     = require("crypto");
const Course     = require("../models/course");
const Order      = require("../models/order");
const Enrollment = require("../models/enrollment");
const Progress   = require("../models/progress");

// ─── MOCK PAYMENT SYSTEM ──────────────────────────────────────────────────────
// No Razorpay account needed — simulates real payment flow
// Perfect for college projects & demos

// Generate fake order ID
const generateOrderId  = () => `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
const generatePaymentId = () => `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// POST /api/payment/create-order
const createOrder = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Check course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    // Check not already enrolled
    const existing = await Enrollment.findOne({ user: req.user._id, course: courseId });
    if (existing) return res.status(400).json({ success: false, message: "Already enrolled in this course" });

    // Get amount
    const amount = (course.price?.sale || course.price?.original || 0) * 100; // in paise
    if (amount === 0) return res.status(400).json({ success: false, message: "This course is free — use /api/enrollment/free" });

    // Generate mock order
    const mockOrderId = generateOrderId();

    // Save order in DB
    await Order.create({
      user:            req.user._id,
      course:          courseId,
      razorpayOrderId: mockOrderId,
      amount,
      status:          "created",
    });

    res.status(200).json({
      success:    true,
      orderId:    mockOrderId,
      amount,
      currency:   "INR",
      courseName: course.title,
      userName:   req.user.name,
      userEmail:  req.user.email,
      // Tell frontend this is mock mode
      isMock:     true,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/payment/verify
// In mock mode — payment always succeeds ✅
const verifyPayment = async (req, res) => {
  try {
    const { orderId, courseId, amount } = req.body;

    if (!orderId || !courseId) {
      return res.status(400).json({ success: false, message: "orderId and courseId are required" });
    }

    // Generate mock payment ID
    const mockPaymentId = generatePaymentId();

    // Update order to paid
    await Order.findOneAndUpdate(
      { razorpayOrderId: orderId },
      {
        razorpayPaymentId: mockPaymentId,
        razorpaySignature: "mock_signature_verified",
        status:            "paid",
      }
    );

    // Create enrollment
    const enrollment = await Enrollment.create({
      user:          req.user._id,
      course:        courseId,
      paymentStatus: "completed",
      paymentId:     mockPaymentId,
      orderId:       orderId,
      amountPaid:    (amount || 0) / 100,
    });

    // Create progress record
    await Progress.create({
      user:       req.user._id,
      course:     courseId,
      enrollment: enrollment._id,
    });

    // Increment student count
    await Course.findByIdAndUpdate(courseId, { $inc: { totalStudents: 1 } });

    res.status(200).json({
      success:    true,
      message:    "🎉 Payment successful! Enrollment complete.",
      paymentId:  mockPaymentId,
      enrollment,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "Already enrolled" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/payment/my-orders
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("course", "title thumbnail")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, total: orders.length, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createOrder, verifyPayment, getMyOrders };