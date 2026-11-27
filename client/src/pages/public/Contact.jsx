import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import LeadForm from "../../components/common/LeadForm";
import LocationMap from "../../components/common/LocationMap";
import { projectInfo } from "../../data/siteData";

const whatsappNumber = projectInfo.phone.replace(/[^\d]/g, "");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'm interested in SHD Industrial Park. Please share more details."
)}`;

const quickContacts = [
  {
    icon: Phone,
    label: "Call the Project Team",
    value: projectInfo.phone,
    href: `tel:${projectInfo.phone}`,
  },
  {
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    value: "Quick response, 7 days a week",
    href: whatsappLink,
  },
  {
    icon: MapPin,
    label: "Visit the Site",
    value: projectInfo.location,
    href: "#location",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sun, 9 AM to 7 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Contact us"
        title="Talk to the project team."
        description="Whether you'd like pricing details, a site visit, or a callback — reach us however's easiest."
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 -mt-8 md:-mt-10 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickContacts.map((c) => {
            const content = (
              <>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700 opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-forest-700/15 to-forest-700/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <c.icon size={20} className="text-forest-700" strokeWidth={2} />
                </div>
                <p className="font-display text-base font-semibold text-ink-900">
                  {c.label}
                </p>
                <p className="mt-1.5 text-sm text-ink-900/60">{c.value}</p>
              </>
            );

            const className =
              "group relative rounded-2xl border border-forest-950/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,61,31,0.06)] hover:border-gold-500/40 hover:shadow-[0_16px_40px_rgba(11,61,31,0.13)] hover:-translate-y-1 transition-all overflow-hidden";

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={className}
              >
                {content}
              </a>
            ) : (
              <div key={c.label} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <LeadForm />
      </div>
      <LocationMap />
    </div>
  );
}