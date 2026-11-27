import { projectInfo } from "../../data/siteData";

const heroBanner = "/images/home/hero.webp";

export default function Hero() {
  return (
    <section id="top" className="bg-forest-950 pt-[76px]">
      {/* Banner image — carries the logotype, location, and gate photo */}
      <img
        src={heroBanner}
        alt={`${projectInfo.name} — ${projectInfo.location}`}
        className="w-full h-auto block"
      />
    </section>
  );
}