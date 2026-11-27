import { sendLeadEmail } from "../services/mailService.js";

export async function submitLead(req, res) {
  try {
    await sendLeadEmail(req.body);
    res.json({ message: "Thank you! We will contact you soon." });
  } catch (err) {
    // The email failed, so keep the enquiry in the server log for follow-up.
    console.error("Email error:", err.message);
    console.error("Unsent lead:", JSON.stringify(req.body));
    res.status(500).json({ message: "Could not send your enquiry. Please call us directly." });
  }
}
