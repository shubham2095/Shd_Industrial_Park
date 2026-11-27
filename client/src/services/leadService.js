import { api } from "./api";

// Sends the "Request a Callback" form to the server, which emails the project team.
export function sendLead(form) {
  return api("/lead", { method: "POST", body: form });
}
