// seedLectures.js
// Run this once: node seedLectures.js
// This adds sample lectures & chapters to every course in your DB

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => { console.error("❌ MongoDB error:", err); process.exit(1); });

// ── Course Model ──────────────────────────────────────────────────────────────
const chapterSchema = new mongoose.Schema({
  title:       { type: String },
  videoUrl:    { type: String, default: "" },
  duration:    { type: Number, default: 0 },
  isFree:      { type: Boolean, default: false },
  description: { type: String, default: "" },
});

const lectureSchema = new mongoose.Schema({
  title:    { type: String },
  chapters: [chapterSchema],
  duration: { type: Number, default: 0 },
});

const courseSchema = new mongoose.Schema({
  title:    String,
  lectures: [lectureSchema],
}, { strict: false });

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

// ── Sample YouTube videos (free, publicly embeddable) ─────────────────────────
const VIDEO_POOL = [
  "https://www.youtube.com/watch?v=ukzFI9rgwfU",  // ML intro
  "https://www.youtube.com/watch?v=1FZ0A1QCMWc",  // supervised learning
  "https://www.youtube.com/watch?v=aircAruvnKk",  // neural networks
  "https://www.youtube.com/watch?v=PaCmpygFfXo",  // python basics
  "https://www.youtube.com/watch?v=rfscVS0vtbw",  // python full course
  "https://www.youtube.com/watch?v=qw--VYLpxG4",  // react intro
  "https://www.youtube.com/watch?v=w7ejDZ8SWv8",  // node.js
  "https://www.youtube.com/watch?v=4deVCNJq3qc",  // css flexbox
  "https://www.youtube.com/watch?v=eI4an8aSsgw",  // data science
  "https://www.youtube.com/watch?v=SqrbIlUwR0U",  // web dev intro
];

// Pick a video from pool based on index
const getVideo = (i) => VIDEO_POOL[i % VIDEO_POOL.length];

// Generate lectures based on course title
const generateLectures = (courseTitle) => {
  const topics = {
    Development: [
      { lecture: "Getting Started",         chapters: ["Environment Setup", "Hello World", "Project Structure"] },
      { lecture: "Core Concepts",           chapters: ["Variables & Types", "Functions", "Control Flow"] },
      { lecture: "Advanced Topics",         chapters: ["Async Programming", "Error Handling", "Best Practices"] },
      { lecture: "Project & Deployment",    chapters: ["Building the Project", "Testing", "Deploying to Production"] },
    ],
    Design: [
      { lecture: "Design Fundamentals",     chapters: ["Color Theory", "Typography", "Layout Principles"] },
      { lecture: "Tools & Workflow",        chapters: ["Figma Basics", "Components", "Auto Layout"] },
      { lecture: "UI Patterns",             chapters: ["Navigation Design", "Forms & Inputs", "Cards & Lists"] },
      { lecture: "Portfolio & Career",      chapters: ["Case Study Writing", "Presenting Work", "Getting Hired"] },
    ],
    Data: [
      { lecture: "Introduction to Data",    chapters: ["What is Data Science?", "Tools Overview", "Python Basics"] },
      { lecture: "Data Wrangling",          chapters: ["Pandas Basics", "Cleaning Data", "Data Transformation"] },
      { lecture: "Visualization",           chapters: ["Matplotlib", "Seaborn", "Interactive Charts"] },
      { lecture: "Machine Learning",        chapters: ["Supervised Learning", "Model Evaluation", "Deployment"] },
    ],
    Marketing: [
      { lecture: "Marketing Fundamentals",  chapters: ["Understanding Your Audience", "Brand Strategy", "Positioning"] },
      { lecture: "Digital Channels",        chapters: ["SEO Basics", "Social Media", "Email Marketing"] },
      { lecture: "Paid Advertising",        chapters: ["Google Ads", "Meta Ads", "Budgeting"] },
      { lecture: "Analytics & Growth",      chapters: ["Google Analytics", "A/B Testing", "Scaling Campaigns"] },
    ],
    default: [
      { lecture: "Introduction",            chapters: ["Overview", "Getting Started", "Key Concepts"] },
      { lecture: "Core Module",             chapters: ["Fundamentals", "Practice Exercises", "Real Examples"] },
      { lecture: "Advanced Module",         chapters: ["Deep Dive", "Case Studies", "Expert Tips"] },
      { lecture: "Final Project",           chapters: ["Project Planning", "Building", "Review & Submit"] },
    ],
  };

  // Pick template based on course title keywords
  let template = topics.default;
  if (/react|node|web|cloud|aws|javascript|python|code|develop/i.test(courseTitle)) template = topics.Development;
  else if (/design|figma|ui|ux|graphic/i.test(courseTitle))                          template = topics.Design;
  else if (/data|machine|ml|analytics|science|business/i.test(courseTitle))          template = topics.Data;
  else if (/marketing|content|digital|seo/i.test(courseTitle))                       template = topics.Marketing;

  let videoIndex = 0;

  return template.map((lec, li) => ({
    title:    lec.lecture,
    duration: lec.chapters.length * 20,
    chapters: lec.chapters.map((chName, ci) => ({
      title:       chName,
      videoUrl:    getVideo(videoIndex++),
      duration:    20,
      isFree:      li === 0 && ci === 0, // first chapter of first lecture is free
      description: `${chName} — part of ${lec.lecture}`,
    })),
  }));
};

// ── Main seed function ────────────────────────────────────────────────────────
const seed = async () => {
  try {
    const courses = await Course.find({});
    console.log(`\n📚 Found ${courses.length} courses. Adding lectures...\n`);

    let updated = 0;

    for (const course of courses) {
      // Skip if already has lectures
      if (course.lectures && course.lectures.length > 0) {
        console.log(`⏭  Skipping "${course.title}" — already has lectures`);
        continue;
      }

      const lectures = generateLectures(course.title);

      await Course.findByIdAndUpdate(course._id, {
        $set: { lectures }
      });

      console.log(`✅ Added ${lectures.length} lectures to "${course.title}"`);
      updated++;
    }

    console.log(`\n🎉 Done! Updated ${updated} courses.\n`);
  } catch (err) {
    console.error("❌ Seed error:", err);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Connection closed.");
  }
};

seed();