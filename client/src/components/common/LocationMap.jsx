import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Route,
  Clock3,
  Building2,
  Navigation,
} from "lucide-react";
import { projectInfo } from "../../data/siteData";
import Eyebrow from "./Eyebrow";

const MAPS_QUERY = encodeURIComponent(
  "SHD Industrial Park, Ishapur, Bhojpur, Modinagar-Hapur Highway, UP"
);

const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const connectivity = [
  "5 Minutes from Bhojpur Change-over",
  "Direct Access to Delhi-Meerut Expressway",
  "Located on Modinagar-Hapur Highway",
  "Excellent Connectivity to Ganga Expressway",
];

const highlights = [
  {
    icon: Clock3,
    title: "5 Min",
    desc: "Bhojpur Change-over",
  },
  {
    icon: Route,
    title: "Expressway",
    desc: "Delhi-Meerut",
  },
  {
    icon: Building2,
    title: "Industrial",
    desc: "Prime Location",
  },
];

export default function LocationMap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="location"
      ref={ref}
      className="relative overflow-hidden bg-paper py-24"
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 h-72 w-72 rounded-full bg-forest-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-forest-700/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Prime Location</Eyebrow>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              Positioned at the
              <span className="text-forest-700"> Heart of Growth</span>
            </h2>

            <p className="mt-6 text-lg text-ink-900/70 leading-8 max-w-xl">
              SHD Industrial Park enjoys seamless connectivity through major
              highways and expressways, making it one of the most strategic
              industrial destinations for businesses and investors.
            </p>

            {/* Address Card */}
            <div className="mt-8 rounded-2xl border border-forest-950/10 bg-white shadow-[0_10px_30px_rgba(11,61,31,0.08)] p-5 flex gap-4">
              <div className="h-14 w-14 rounded-xl bg-forest-700 flex items-center justify-center text-white">
                <MapPin size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-lg text-ink-900">
                  Project Address
                </h4>

                <p className="text-ink-900/70 mt-1">
                  {projectInfo.location}
                </p>
              </div>
            </div>

            {/* Connectivity */}
            <div className="mt-10 space-y-5">
              {connectivity.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-10 w-10 rounded-full bg-forest-700 text-white flex items-center justify-center shadow-md">
                    <Navigation size={18} />
                  </div>

                  <p className="text-ink-900/80 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest-700 px-8 py-4 text-white font-semibold shadow-[0_8px_24px_rgba(11,61,31,0.18)] hover:bg-forest-950 hover:shadow-[0_12px_30px_rgba(11,61,31,0.28)] hover:-translate-y-1 transition-all"
            >
              Get Directions
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="absolute -top-5 left-6 right-6 z-20 grid grid-cols-3 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-forest-950/10 bg-white/90 backdrop-blur p-4 text-center shadow-[0_8px_20px_rgba(11,61,31,0.08)] hover:border-gold-500/40 hover:shadow-[0_16px_35px_rgba(11,61,31,0.14)] transition-all"
                  >
                    <Icon
                      size={22}
                      className="mx-auto text-forest-700 group-hover:scale-110 transition-transform"
                    />

                    <h4 className="mt-2 font-bold text-ink-900">
                      {item.title}
                    </h4>

                    <p className="text-xs text-ink-900/60">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-forest-950/10 shadow-[0_18px_50px_rgba(11,61,31,0.12)] h-[520px]">
              <iframe
                title="SHD Industrial Park"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}