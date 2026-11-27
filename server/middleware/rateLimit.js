import rateLimit from "express-rate-limit";

// Max 5 enquiries per IP every 15 minutes.
export const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Too many requests. Please try again later or call us directly." },
});
