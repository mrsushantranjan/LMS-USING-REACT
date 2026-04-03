// ─── SEED FILE ────────────────────────────────────────────────────────────────
// Run this once to add sample courses to MongoDB
// Command: node seed.js

const mongoose = require("mongoose");
const dotenv   = require("dotenv");

dotenv.config();

// ─── SAMPLE COURSES DATA ──────────────────────────────────────────────────────
const sampleCourses = [
  {
    title:         "Full Stack Web Development",
    description:   "Master React, Node.js, Express and MongoDB. Build 5 real-world projects from scratch.",
    category:      "Development",
    level:         "Intermediate",
    isFree:        false,
    price:         { original: 2999, sale: 1499 },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c1/400/220",
    totalStudents: 4820,
    rating:        4.8,
    totalRatings:  320,
    tags:          ["react", "nodejs", "mongodb", "express"],
    lectures: [
      {
        title:    "HTML & CSS Foundations",
        duration: 95,
        chapters: [
          { title: "Semantic HTML",     videoUrl: "", duration: 18, isFree: true  },
          { title: "CSS Flexbox",       videoUrl: "", duration: 22, isFree: true  },
          { title: "CSS Grid",          videoUrl: "", duration: 25, isFree: false },
          { title: "Responsive Design", videoUrl: "", duration: 30, isFree: false },
        ],
      },
      {
        title:    "JavaScript Essentials",
        duration: 140,
        chapters: [
          { title: "ES6+ Features",      videoUrl: "", duration: 35, isFree: true  },
          { title: "DOM Manipulation",   videoUrl: "", duration: 28, isFree: false },
          { title: "Fetch API",          videoUrl: "", duration: 40, isFree: false },
          { title: "Error Handling",     videoUrl: "", duration: 37, isFree: false },
        ],
      },
    ],
  },
  {
    title:         "UI/UX Design Mastery",
    description:   "Learn the complete design process from research to high-fidelity prototypes using Figma.",
    category:      "Design",
    level:         "Beginner",
    isFree:        false,
    price:         { original: 1999, sale: null },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c2/400/220",
    totalStudents: 2310,
    rating:        4.9,
    totalRatings:  180,
    tags:          ["figma", "ux", "design", "prototyping"],
    lectures: [
      {
        title:    "Design Fundamentals",
        duration: 80,
        chapters: [
          { title: "Visual Hierarchy", videoUrl: "", duration: 20, isFree: true  },
          { title: "Color Theory",     videoUrl: "", duration: 25, isFree: true  },
          { title: "Typography",       videoUrl: "", duration: 35, isFree: false },
        ],
      },
    ],
  },
  {
    title:         "Data Science with Python",
    description:   "From zero to data scientist. Learn Python, Pandas, NumPy, Matplotlib and Machine Learning.",
    category:      "Data",
    level:         "Advanced",
    isFree:        true,
    price:         { original: 0, sale: null },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c3/400/220",
    totalStudents: 6100,
    rating:        4.7,
    totalRatings:  410,
    tags:          ["python", "pandas", "numpy", "ml"],
    lectures: [],
  },
  {
    title:         "React & Next.js Bootcamp",
    description:   "Deep dive into React 18, Next.js 14, TypeScript and modern frontend architecture.",
    category:      "Development",
    level:         "Intermediate",
    isFree:        false,
    price:         { original: 3499, sale: 2199 },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c4/400/220",
    totalStudents: 3750,
    rating:        4.8,
    totalRatings:  290,
    tags:          ["react", "nextjs", "typescript"],
    lectures: [],
  },
  {
    title:         "Digital Marketing Pro",
    description:   "Master SEO, Google Ads, Social Media Marketing and Analytics. Grow any business online.",
    category:      "Marketing",
    level:         "Beginner",
    isFree:        true,
    price:         { original: 0, sale: null },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c5/400/220",
    totalStudents: 1980,
    rating:        4.6,
    totalRatings:  150,
    tags:          ["seo", "marketing", "google-ads"],
    lectures: [],
  },
  {
    title:         "Machine Learning A-Z",
    description:   "Complete ML course covering supervised, unsupervised learning, neural networks and deep learning.",
    category:      "Data",
    level:         "Advanced",
    isFree:        false,
    price:         { original: 4999, sale: 2999 },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c6/400/220",
    totalStudents: 5420,
    rating:        4.9,
    totalRatings:  380,
    tags:          ["ml", "tensorflow", "python", "deep-learning"],
    lectures: [],
  },
  {
    title:         "Graphic Design Essentials",
    description:   "Learn Adobe Illustrator, Photoshop and brand design. Create stunning visuals from day one.",
    category:      "Design",
    level:         "Beginner",
    isFree:        false,
    price:         { original: 1499, sale: null },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c7/400/220",
    totalStudents: 1240,
    rating:        4.5,
    totalRatings:  95,
    tags:          ["photoshop", "illustrator", "design"],
    lectures: [],
  },
  {
    title:         "Cloud Computing & AWS",
    description:   "Get AWS certified. Learn EC2, S3, Lambda, RDS and cloud architecture best practices.",
    category:      "Development",
    level:         "Advanced",
    isFree:        false,
    price:         { original: 5999, sale: 3499 },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c8/400/220",
    totalStudents: 2890,
    rating:        4.7,
    totalRatings:  220,
    tags:          ["aws", "cloud", "devops", "lambda"],
    lectures: [],
  },
  {
    title:         "Content Writing Fundamentals",
    description:   "Write content that ranks on Google and converts readers into customers.",
    category:      "Marketing",
    level:         "Beginner",
    isFree:        true,
    price:         { original: 0, sale: null },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c9/400/220",
    totalStudents: 890,
    rating:        4.4,
    totalRatings:  70,
    tags:          ["writing", "seo", "content"],
    lectures: [],
  },
  {
    title:         "Business Analytics",
    description:   "Turn data into business decisions. Learn Excel, Power BI, SQL and data storytelling.",
    category:      "Data",
    level:         "Intermediate",
    isFree:        false,
    price:         { original: 2499, sale: 1799 },
    isPublished:   true,
    thumbnail:     "https://picsum.photos/seed/c10/400/220",
    totalStudents: 3200,
    rating:        4.6,
    totalRatings:  245,
    tags:          ["excel", "powerbi", "sql", "analytics"],
    lectures: [],
  },
];

// ─── SEED FUNCTION ────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    const Course = require("./models/Course");

    // Clear existing courses
    await Course.deleteMany({});
    console.log("🗑️  Cleared existing courses");

    // Insert sample courses
    // Note: instructor is null for seed data
    // In production, set to a real admin user _id
    const courses = await Course.insertMany(
      sampleCourses.map((c) => ({ ...c, instructor: new mongoose.Types.ObjectId() }))
    );

    console.log(`✅ ${courses.length} courses inserted successfully!`);
    console.log("\n📋 Inserted courses:");
    courses.forEach((c, i) => {
      console.log(`  ${i + 1}. ${c.title} — ₹${c.price?.sale || c.price?.original || "Free"} [${c.category}]`);
    });

    console.log("\n🚀 Seed complete! Run 'npm run dev' to start the server.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error.message);
    process.exit(1);
  }
};

seed();