import { useEffect } from "react";
import { useLocation } from "react-router";

// Scrolls to the top on page changes. Links to a section (/#about) are left to the Home page.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
