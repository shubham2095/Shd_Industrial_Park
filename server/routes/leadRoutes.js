import express from "express";
import { leadLimiter } from "../middleware/rateLimit.js";
import validate from "../middleware/validate.js";
import { leadSchema } from "../schemas/leadSchema.js";
import { submitLead } from "../controllers/leadController.js";

const router = express.Router();

// POST /api/lead
router.post("/", leadLimiter, validate(leadSchema), submitLead);

export default router;
