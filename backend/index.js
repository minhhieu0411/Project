import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import caregiverRoutes from "./routes/caregiverRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/caregivers", caregiverRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
