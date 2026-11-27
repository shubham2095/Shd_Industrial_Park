import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Building2, Camera, CheckCircle2, ArrowUpRight } from "lucide-react";
import { previousProjects } from "../../data/siteData";

export default function PreviousProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="previous-projects" ref={ref} className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Gradient badge eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full p-[1.5px] bg-gradient-to-r from-forest-950 via-forest-500 to-forest-950 mb-5"
        >
          <span className="flex items-center rounded-full bg-paper px-5 py-2">
            <span className="animate-gradient-text bg-gradient-to-r from-forest-950 via-forest-500 to-forest-950 bg-clip-text text-transparent font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Track Record
            </span>
          </span>
        </motion.div>

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight max-w-lg">
          Projects the group has{" "}
          <span className="text-gold-500">already delivered</span>.
        </h2>
        <p className="mt-4 text-ink-900/60 max-w-lg leading-relaxed">
          A track record built over multiple developments across Delhi NCR
          &mdash; each one handed over on schedule and{" "}
          <span className="font-semibold text-ink-900/80">fully occupied</span>{" "}
          today.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {previousProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 24, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-forest-950/10 bg-white overflow-hidden shadow-[0_8px_30px_rgba(11,61,31,0.06)] hover:border-gold-500/40 hover:shadow-[0_18px_44px_rgba(11,61,31,0.14)] transition-all"
            >
              {/* Top accent bar, brightens on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700 opacity-50 group-hover:opacity-100 transition-opacity z-10" />

              {/* Photo area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="h-full w-full flex flex-col items-center justify-center gap-2 bg-forest-700/[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(11,61,31,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,31,0.08) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    <Camera size={24} className="text-forest-950/25" strokeWidth={1.5} />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-forest-950/35">
                      Photo coming soon
                    </span>
                  </div>
                )}

                {/* Subtle dark gradient at the base of the photo, for depth */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-forest-950/40 to-transparent" />

                {/* Year badge, floats over the photo */}
                <span className="absolute top-3 right-3 rounded-full bg-forest-950/85 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-semibold text-gold-300">
                  {p.year}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-9 w-9 rounded-full bg-forest-700/10 flex items-center justify-center shrink-0">
                    <Building2 size={16} className="text-forest-700" strokeWidth={2} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-forest-700/70 font-semibold">
                    {p.category}
                  </p>
                </div>

                <h3 className="font-display text-lg font-semibold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-900/60 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-4 flex items-center justify-between gap-1.5 pt-4 border-t border-forest-950/8">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-gold-500 shrink-0" strokeWidth={2} />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-gold-500 font-semibold">
                      {p.tag}
                    </span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-forest-700 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all">
                    View Details
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}