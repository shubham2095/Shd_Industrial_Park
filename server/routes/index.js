import express from "express";
import leadRoutes from "./leadRoutes.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.use("/lead", leadRoutes);

export default router;
