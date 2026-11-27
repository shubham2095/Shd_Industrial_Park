import { Routes, Route } from "react-router";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/layout/FloatingButtons";

import Home from "./pages/public/Home";
import Gallery from "./pages/public/Gallery";
import PriceList from "./pages/public/PriceList";
import Contact from "./pages/public/Contact";
import NotFound from "./pages/public/NotFound";

export default function PublicSite() {
  return (
    <div className="min-h-screen bg-paper text-ink-900 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
