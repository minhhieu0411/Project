import express from "express";
import { getCaregivers, getCaregiverById, createCaregiver, updateCaregiver, deleteCaregiver } from "../controllers/caregiverController.js";

const router = express.Router();

router.get("/", getCaregivers);
router.get("/:id", getCaregiverById);
router.post("/", createCaregiver);
router.put("/:id", updateCaregiver);
router.delete("/:id", deleteCaregiver);

export default router;
