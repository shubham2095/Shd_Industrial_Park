import * as MarqueeModule from "react-fast-marquee";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { nearbyLandmarks } from "../../data/siteData";
import { resolveDefaultExport } from "../../utils/interop";

const amulLogo = "/images/neighbours/amul.png";
const inoxLogo = "/images/neighbours/inox.png";
const motherdairyLogo = "/images/neighbours/motherdairy.png";
const namasteLogo = "/images/neighbours/namaste.png";

const logos = {
  amul: amulLogo,
  inox: inoxLogo,
  motherdairy: motherdairyLogo,
  namaste: namasteLogo,
};

const Marquee = resolveDefaultExport(MarqueeModule);

export default function NearbyLandmarks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-paper border-y border-forest-950/10 py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full p-[1.5px] bg-gradient-to-r from-forest-950 via-forest-500 to-forest-950"
        >
          <span className="flex items-center gap-2 rounded-full bg-paper px-5 py-2">
            <MapPin size={14} className="text-forest-700 shrink-0" strokeWidth={2} />
            <span className="animate-gradient-text bg-gradient-to-r from-forest-950 via-forest-500 to-forest-950 bg-clip-text text-transparent font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Established Neighbours Already Running Nearby
            </span>
          </span>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <Marquee speed={32} gradient={false} pauseOnHover>
            {nearbyLandmarks.map((item) => (
              <div
                key={item.name}
                className="group flex items-center gap-4 mx-3 rounded-2xl border border-forest-950/10 bg-white px-6 py-5 shadow-[0_8px_24px_rgba(11,61,31,0.07)] hover:border-gold-500/40 hover:shadow-[0_14px_34px_rgba(11,61,31,0.12)] hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                <div className="h-12 w-24 rounded-lg bg-white border border-forest-950/8 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={logos[item.logoKey]}
                    alt={`${item.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink-900">
                    {item.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-gold-500 font-semibold">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}