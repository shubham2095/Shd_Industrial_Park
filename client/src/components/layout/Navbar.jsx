import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectInfo } from "../../data/siteData";

const logo = "/images/brand/logo.png";

const links = [
  { label: "About", href: "/#about", type: "hash" },
  { label: "Highlights", href: "/#highlights", type: "hash" },
  { label: "Previous Projects", href: "/#previous-projects", type: "hash" },
  { label: "Amenities", href: "/#amenities", type: "hash" },
  { label: "Gallery", href: "/gallery", type: "route" },
  { label: "Price List", href: "/price-list", type: "route" },
  { label: "Contact", href: "/contact", type: "route" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 bg-forest-950 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
    >
      {/* Gold hairline along the bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="rounded-xl overflow-hidden border border-gold-500/40 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform">
            <img src={logo} alt="SHD Industrial Park" className="h-12 w-auto block" />
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="group relative py-2">
              <span className="font-display text-[13px] tracking-wide uppercase text-white/80 group-hover:text-white transition-colors">
                {l.label}
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${projectInfo.phone}`}
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-mono text-sm text-white hover:border-white/40 hover:bg-white/5 transition-all"
          >
            <Phone size={15} strokeWidth={2} />
            {projectInfo.phone}
          </a>
          <Link
            to="/#lead-form"
            className="animate-glow-pulse rounded-full bg-gold-500 px-6 py-2.5 font-display text-sm font-semibold text-forest-950 hover:bg-gold-300 hover:-translate-y-0.5 transition-all"
          >
            Book Site Visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative h-11 w-11 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/20 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-forest-950 border-t border-white/10"
          >
            <div className="flex flex-col px-5 py-5 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-white/10 font-display text-sm uppercase tracking-wide text-white"
                  >
                    {l.label}
                    <ArrowRight size={15} className="text-gold-500" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: links.length * 0.05 }}
                className="mt-4 flex flex-col gap-3"
              >
                <Link
                  to="/#lead-form"
                  onClick={() => setOpen(false)}
                  className="animate-glow-pulse rounded-full bg-gold-500 px-5 py-3 text-center font-display text-sm font-semibold text-forest-950"
                >
                  Book Site Visit
                </Link>
                <a
                  href={`tel:${projectInfo.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-3 font-mono text-sm text-white"
                >
                  <Phone size={15} /> {projectInfo.phone}
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}