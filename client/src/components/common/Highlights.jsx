import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  LandPlot,
  IndianRupee,
  ShieldCheck,
  Hammer,
  BadgeCheck,
  ArrowUp,
} from "lucide-react";
import { highlights } from "../../data/siteData";

const icons = [LandPlot, IndianRupee, BadgeCheck, Hammer, ShieldCheck];

export default function Highlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="highlights" ref={ref} className="relative overflow-hidden bg-forest-950 py-20 md:py-28">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-forest-500/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none"
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

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Gradient badge eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full p-[1.5px] bg-gradient-to-r from-forest-300 via-forest-500 to-forest-300 mb-5"
        >
          <span className="flex items-center rounded-full bg-forest-950 px-5 py-2">
            <span className="animate-gradient-text bg-gradient-to-r from-forest-300 via-gold-300 to-forest-300 bg-clip-text text-transparent font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Why Invest Here
            </span>
          </span>
        </motion.div>

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-lg">
          Five reasons investors are backing this belt.
        </h2>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-14">
          {highlights.map((h, i) => {
            const Icon = icons[i] ?? LandPlot;
            return (
              <motion.div
                key={h.title}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number + connecting arrow, sitting above the card */}
                <span className="h-9 w-9 rounded-full bg-gold-500 text-forest-950 font-mono text-sm font-bold flex items-center justify-center shadow-[0_0_20px_rgba(201,162,39,0.5)]">
                  {i + 1}
                </span>
                <ArrowUp size={16} className="text-gold-500/70 my-1" strokeWidth={2.5} />

                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col w-full h-[380px] rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-gold-500/50 hover:bg-white/[0.09] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all overflow-hidden text-left"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-500 via-gold-500 to-forest-500 opacity-40 group-hover:opacity-100 transition-opacity" />

                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gold-500/25 to-gold-500/5 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-gold-300" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white leading-snug">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}