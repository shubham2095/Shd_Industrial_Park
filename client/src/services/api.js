// Small fetch wrapper for the JSON API. Errors carry the server's message.
export async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(`/api${path}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data) {
    throw new Error(data?.message || "Something went wrong. Please try again or call us directly.");
  }

  return data;
}
