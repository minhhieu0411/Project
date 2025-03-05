import Caregiver from "../models/caregiverModel.js";

// Get all caregivers
export const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.status(200).json(caregivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get caregiver by ID
export const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json(caregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new caregiver
export const createCaregiver = async (req, res) => {
  try {
    const newCaregiver = new Caregiver(req.body);
    await newCaregiver.save();
    res.status(201).json(newCaregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update caregiver
export const updateCaregiver = async (req, res) => {
  try {
    const updatedCaregiver = await Caregiver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCaregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json(updatedCaregiver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete caregiver
export const deleteCaregiver = async (req, res) => {
  try {
    const deletedCaregiver = await Caregiver.findByIdAndDelete(req.params.id);
    if (!deletedCaregiver) return res.status(404).json({ message: "Caregiver not found" });
    res.status(200).json({ message: "Caregiver deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
