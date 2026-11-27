import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import { getSitemap, getRobots } from "./controllers/seoController.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// One .env file at the project root, no matter which folder the command runs from.
dotenv.config({ path: path.join(__dirname, "..", ".env"), quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;
const distPath = path.join(__dirname, "..", "client", "dist");

// Hosting runs behind a reverse proxy; trusting it lets rate limiting see the real visitor IP.
// Override with TRUST_PROXY (number of proxies, or false).
const trustProxy = process.env.TRUST_PROXY ?? (process.env.NODE_ENV === "production" ? "1" : "false");
app.set("trust proxy", trustProxy === "false" ? false : Number(trustProxy) || trustProxy);

app.use(
  helmet({
    // CSP is off for now: the site uses Google Fonts/Maps and inline styles.
    contentSecurityPolicy: false,
  }),
);
app.use(express.json({ limit: "10kb" }));

// API
app.use("/api", routes);
app.use("/api", notFound);

// SEO files built from SITE_URL (must come before the static files)
app.get("/sitemap.xml", getSitemap);
app.get("/robots.txt", getRobots);

// Built React app
app.use(express.static(distPath));

// Any other route gets index.html so React Router can handle it (Express 5 needs a regex, not "*")
app.get(/^\/(?!api(?:\/|$)).*/, (req, res, next) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) next(err);
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  if (!fs.existsSync(path.join(distPath, "index.html"))) {
    console.warn("Warning: client/dist not found, so the website will not load. Run `npm run build` before `npm start`.");
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Warning: SMTP_USER or SMTP_PASS is not set. Enquiry emails will fail.");
  }
});
