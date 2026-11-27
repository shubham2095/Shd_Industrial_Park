import { Link } from "react-router";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { projectInfo } from "../../data/siteData";

const logo = "/images/brand/logo-footer.png";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Previous Projects", href: "/#previous-projects" },
  { label: "Amenities", href: "/#amenities" },
];

const explore = [
  { label: "Gallery", href: "/gallery" },
  { label: "Price List", href: "/price-list" },
  { label: "Contact", href: "/contact" },
  { label: "Location", href: "/#location" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-forest-950 via-[#06281f] to-black text-white">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold-300/10 blur-3xl"></div>

      {/* Gold Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-xl bg-white p-2 shadow-lg">
              <img src={logo} alt="SHD Industrial Park" className="h-14 w-auto rounded-lg border border-gold-500/30" />
            </div>

            <p className="mt-6 leading-7 text-white/70">
              <span className="font-semibold text-gold-300">
                {projectInfo.nameHindi}
              </span>{" "}
              is a premium 400-acre plotted industrial township strategically
              located on the Modinagar–Hapur Highway, designed for future-ready
              industrial growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-white/70 transition duration-300 hover:text-gold-300"
                  >
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
              Explore
            </h3>

            <ul className="space-y-4">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-white/70 transition duration-300 hover:text-gold-300"
                  >
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
              Contact Us
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <a
                href={`tel:${projectInfo.phone}`}
                className="group flex items-start gap-4 rounded-xl p-2 transition hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Call Us
                  </p>

                  <p className="font-semibold text-white transition group-hover:text-gold-300">
                    {projectInfo.phone}
                  </p>
                </div>
              </a>

              <div className="mt-5 flex items-start gap-4 rounded-xl p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Project Location
                  </p>

                  <p className="leading-6 text-white/70">
                    {projectInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/50">
              © {year}{" "}
              <span className="font-semibold text-white">
                {projectInfo.name}
              </span>
              . All Rights Reserved.
            </p>

            <p className="text-sm text-white/40">
              Powered by{" "}
              <a
                href="https://www.heltog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-300 transition-colors hover:text-gold-400"
              >
                Heltog Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}