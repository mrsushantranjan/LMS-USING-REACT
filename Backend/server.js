import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes       from "./routes/auth.routes.js";
import courseRoutes     from "./routes/course.routes.js";
import enrollmentRoutes from "./routes/enrollment.routes.js";
import paymentRoutes    from "./routes/payment.routes.js";
import adminRoutes      from "./routes/admin.routes.js";
import progressRoutes   from "./routes/progress.routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "https://mrsushantranjan.github.io",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

// ── MongoDB ───────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");
    try {
      await mongoose.connection.collection('users').dropIndex('clerkId_1');
      console.log("✅ Dropped deprecated clerkId_1 index");
    } catch (e) {}
  })
  .catch((err) => console.error("❌ MongoDB error:", err));

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/auth",        authRoutes);
app.use("/api/courses",     courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/payment",     paymentRoutes);
app.use("/api/admin",       adminRoutes);
app.use("/api/progress",    progressRoutes);

// 404
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

// Trigger restart
