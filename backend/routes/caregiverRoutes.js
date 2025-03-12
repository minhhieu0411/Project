import express from "express";
import caregiverController from "../controllers/caregiverController.js";

const router = express.Router();

router.get("/", caregiverController.getCaregivers);
router.get("/:id", caregiverController.getCaregiverById);
router.post("/", caregiverController.createCaregiver);
router.put("/:id", caregiverController.updateCaregiver);
router.delete("/:id", caregiverController.deleteCaregiver);

// New route for caregiver application
router.post("/apply", caregiverController.applyCaregiver);

export default router;
