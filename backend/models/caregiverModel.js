import mongoose from "mongoose";

const caregiverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    experience: { type: Number, required: true }, 
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Caregiver = mongoose.model("Caregiver", caregiverSchema);
export default Caregiver;
