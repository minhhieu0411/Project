import Caregiver from "../models/caregiverModel.js";

// Get all caregivers
const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.status(200).json(caregivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get caregiver by ID
const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json(caregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new caregiver
const createCaregiver = async (req, res) => {
  try {
    const newCaregiver = new Caregiver(req.body);
    await newCaregiver.save();
    res.status(201).json(newCaregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update caregiver
const updateCaregiver = async (req, res) => {
  try {
    const updatedCaregiver = await Caregiver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCaregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json(updatedCaregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete caregiver
const deleteCaregiver = async (req, res) => {
  try {
    const deletedCaregiver = await Caregiver.findByIdAndDelete(req.params.id);
    if (!deletedCaregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json({ message: "Caregiver deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Apply as a caregiver
const applyCaregiver = async (req, res) => {
  try {
    const { name, age, experience, phone, email, location } = req.body;

    if (!name || !age || !experience || !phone || !email || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if caregiver already exists
    const existingCaregiver = await Caregiver.findOne({ email });
    if (existingCaregiver) {
      return res.status(400).json({ message: "Caregiver already applied" });
    }

    // Save caregiver application
    const newCaregiver = new Caregiver({
      name,
      age,
      experience,
      phone,
      email,
      location,
      available: true, // Default available status
    });

    await newCaregiver.save();
    res.status(201).json({ message: "Application submitted successfully", caregiver: newCaregiver });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Export all functions correctly
export default {
  getCaregivers,
  getCaregiverById,
  createCaregiver,
  updateCaregiver,
  deleteCaregiver,
  applyCaregiver,
};
