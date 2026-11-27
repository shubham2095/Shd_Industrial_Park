import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Camera, Milestone, Droplets, Wifi } from "lucide-react";
import { amenities } from "../../data/siteData";

const amenitiesImage = "/images/home/amenities.jpeg";

const icons = [Zap, ShieldCheck, Camera, Milestone, Droplets, Wifi];

export default function Amenities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="amenities" ref={ref} className="relative overflow-hidden bg-forest-950 py-20 md:py-28">
      {/* Ambient glow, echoing the rest of the site's card sections */}
      <div
        className="absolute top-0 right-0 h-72 w-72 rounded-full bg-forest-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 md:gap-10 items-start">
        {/* Left: intro */}
        <div>
          {/* Gradient badge eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full p-[1.5px] bg-gradient-to-r from-forest-950 via-forest-500 to-forest-950 mb-5"
          >
            <span className="flex items-center rounded-full bg-forest-950/80 px-5 py-2">
              <span className="animate-gradient-text bg-gradient-to-r from-forest-300 via-gold-300 to-forest-300 bg-clip-text text-transparent font-mono text-xs font-bold tracking-[0.2em] uppercase">
                On-site Amenities
              </span>
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight max-w-md">
            Infrastructure that&apos;s{" "}
            <span className="text-gold-500">already in place</span>.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            Every plot is served by round-the-clock utilities and a fully
            covered, monitored compound &mdash; the{" "}
            <span className="font-semibold text-white/90">basics an
            industrial operation needs</span> from day one.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
          >
            <img
              src={amenitiesImage}
              alt="SHD Industrial Park amenities road"
              className="w-full aspect-[16/10] object-cover"
            />
          </motion.div>
        </div>

        {/* Right: amenity grid */}
        <div className="grid grid-cols-2 gap-6">
          {amenities.map((item, i) => {
            const Icon = icons[i] ?? Zap;
            return (
              <motion.div
                key={item.label}
                initial={{ y: 16, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-forest-950/8 bg-white p-8 shadow-[0_6px_20px_rgba(11,61,31,0.06)] hover:border-gold-500/40 hover:shadow-[0_12px_30px_rgba(11,61,31,0.12)] transition-all overflow-hidden"
              >
                {/* Accent bar, brightens on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-500 via-gold-500 to-forest-500 opacity-30 group-hover:opacity-100 transition-opacity" />

                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-forest-700/15 to-forest-700/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-forest-700" strokeWidth={2} />
                </div>
                <p className="mt-5 text-base font-semibold text-ink-900">{item.label}</p>
                <p className="mt-2 text-sm text-ink-900/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}