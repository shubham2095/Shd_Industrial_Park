import { Phone, MessageCircle, LandPlot, Milestone, BadgeCheck, Hammer, ShieldCheck, CheckCircle2 } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import { projectInfo } from "../../data/siteData";

const whatsappNumber = projectInfo.phone.replace(/[^\d]/g, "");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like the detailed price list for SHD Industrial Park."
)}`;

const specRows = [
  { icon: LandPlot, label: "Starting Rate", value: projectInfo.startingPrice },
  { icon: LandPlot, label: "Total Area", value: projectInfo.totalArea },
  { icon: Milestone, label: "Road Width", value: "70 Ft Divider Entry" },
  { icon: BadgeCheck, label: "Approval", value: "U.P. Revenue Code, Sec. 80" },
  { icon: Hammer, label: "Construction", value: "On-site Facility Available" },
  { icon: ShieldCheck, label: "Lease Guaranty", value: "100%" },
];

const included = [
  "No hidden charges — rates are all-inclusive of base development",
  "Registry and documentation support from the project team",
  "Priority allotment for early bookings",
];

export default function PriceListPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Price List"
        title={`Plot pricing at ${projectInfo.name}.`}
        description="Rates below are indicative starting figures. Plot-wise pricing depends on size, facing, and location within the layout."
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 -mt-8 md:-mt-10 relative grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
        {/* Spec table */}
        <div className="relative rounded-2xl border border-forest-950/10 bg-white overflow-hidden shadow-[0_12px_40px_rgba(11,61,31,0.08)]">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700" />

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[420px]">
              <thead>
                <tr className="border-b border-forest-950/10 bg-forest-950/[0.03]">
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wide text-ink-900/60">
                    Detail
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wide text-ink-900/60">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-950/10">
                {specRows.map((row) => (
                  <tr key={row.label} className="hover:bg-forest-700/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <span className="flex items-center gap-2.5 text-sm text-ink-900/70">
                        <row.icon size={16} className="text-forest-700 shrink-0" strokeWidth={2} />
                        {row.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-sm font-semibold text-forest-950">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="px-6 py-4 text-xs text-ink-900/50 border-t border-forest-950/10">
            Rates are subject to change without prior notice.
          </p>
        </div>

        {/* What's included */}
        <div className="lg:hidden rounded-2xl border border-forest-950/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,61,31,0.06)]">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forest-700 font-semibold mb-4">
            What&apos;s Included
          </p>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-900/70">
                <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Highlight + CTA card */}
        <div className="relative rounded-2xl bg-forest-950 p-7 md:p-8 shadow-[0_20px_50px_rgba(11,61,31,0.25)] overflow-hidden">
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-300 mb-3">
              Starting From
            </p>
            <p className="font-display text-4xl font-semibold text-white">
              {projectInfo.startingPrice}
            </p>
            <p className="mt-2 text-sm text-white/60">
              For the complete, plot-wise price sheet, reach out directly &mdash;
              our team will share current availability and rates.
            </p>

            <ul className="hidden lg:block mt-6 space-y-2.5 border-t border-white/10 pt-6">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-white/70">
                  <CheckCircle2 size={14} className="text-gold-300 shrink-0 mt-0.5" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={`tel:${projectInfo.phone}`}
                className="animate-glow-pulse flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-display text-sm font-semibold text-forest-950 hover:bg-gold-300 hover:-translate-y-0.5 transition-all"
              >
                <Phone size={16} />
                {projectInfo.phone}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}