// sitemap.xml and robots.txt, built from SITE_URL. Keep PAGES in step with client/src/PublicSite.jsx.
const PAGES = ["/", "/gallery", "/price-list", "/contact"];

function siteUrl(req) {
  return (process.env.SITE_URL || `${req.protocol}://${req.get("host")}`).replace(/\/+$/, "");
}

export function getSitemap(req, res) {
  const base = siteUrl(req);
  const urls = PAGES.map((page) => `  <url><loc>${base}${page}</loc></url>`).join("\n");

  res
    .type("application/xml")
    .send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
}

export function getRobots(req, res) {
  res.type("text/plain").send(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(req)}/sitemap.xml\n`);
}
