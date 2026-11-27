export function notFound(req, res) {
  res.status(404).json({ message: "Not found." });
}

// Client errors (4xx, e.g. bad JSON or a too-large body) are returned as JSON,
// everything else is logged and hidden from the visitor.
export function errorHandler(err, req, res, _next) {
  const status = err.status || err.statusCode || 500;

  if (status < 500) {
    return res.status(status).json({ message: status === 404 ? "Not found." : "Invalid request." });
  }

  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Something went wrong. Please try again later." });
}
