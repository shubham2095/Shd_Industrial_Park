import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { projectInfo } from "../../data/siteData";

const aboutImage = "/images/home/about.jpeg";

const checklist = [
  "Fully RCC roads across the entire 400 acre layout",
  "Government-approved belt under U.P. Revenue Code, Sec. 80",
  "On-site construction facility available for plot owners",
  "100% lease guaranty backing every investment",
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Left: image card with floating stat badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-md mx-auto lg:mx-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,61,31,0.15)] border border-forest-950/10">
            <img
              src={aboutImage}
              alt="SHD Industrial Park site"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-2xl bg-gold-500 px-6 py-4 shadow-[0_12px_30px_rgba(201,162,39,0.4)]">
            <p className="font-mono text-2xl font-bold text-forest-950 leading-none">
              {projectInfo.totalArea}
              <span>+</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-forest-950/70 font-semibold">
              Years of the Belt&apos;s Growth
            </p>
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Eyebrow with dash lines */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-gold-500" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest-700">
              About the project
            </span>
            <span className="h-px w-6 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 leading-tight tracking-tight max-w-lg">
            An industrial belt built for{" "}
            <span className="text-gold-500">UP&apos;s growth</span>.
          </h2>

          {/* Small dot divider */}
          <div className="flex items-center gap-1.5 mt-4 mb-6">
            <span className="h-px w-8 bg-forest-950/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="h-px w-8 bg-forest-950/15" />
          </div>

          <p className="text-ink-900/70 leading-relaxed max-w-lg">
            {projectInfo.name} sits on the Modinagar-Hapur Highway, five
            minutes from the Bhojpur change-over on the Delhi-Meerut
            Expressway, positioned to serve textiles, steel, chemicals, and
            engineering businesses expanding across the NCR belt.
          </p>
          <p className="mt-4 text-ink-900/70 leading-relaxed max-w-lg">
            Every plot is backed by a government-approved land status, so an
            investor&apos;s capital is working from the day the paperwork
            closes.
          </p>

          {/* Checklist */}
          <ul className="mt-7 space-y-3.5 max-w-lg">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gold-500 shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <span className="text-sm text-ink-900/80">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#lead-form"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-950 transition-colors"
          >
            Talk to the Project Team
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}