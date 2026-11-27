import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "../../data/siteData";

function Tile({ image, onClick }) {
  const clickable = Boolean(image.src);
  return (
    <button
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-forest-950/10 text-left shadow-[0_6px_20px_rgba(11,61,31,0.06)] hover:shadow-[0_12px_32px_rgba(11,61,31,0.12)] transition-shadow ${
        clickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {image.src ? (
        <img
          src={image.src}
          alt={image.label}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full flex flex-col items-center justify-center gap-2 bg-forest-950/[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,61,31,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,31,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <Camera size={22} className="text-forest-950/30" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-wide text-forest-950/40">
            Photo coming soon
          </span>
        </div>
      )}
      <span className="absolute bottom-0 inset-x-0 bg-forest-950/70 px-3 py-2 font-mono text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {image.label}
      </span>
    </button>
  );
}

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(-1);

  const photosWithSrc = galleryImages.filter((img) => img.src);
  const slides = photosWithSrc.map((img) => ({ src: img.src, title: img.label }));

  return (
    <section id="gallery" ref={ref} className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Tile
                image={img}
                onClick={() =>
                  setOpenIndex(photosWithSrc.findIndex((p) => p.id === img.id))
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={slides}
      />
    </section>
  );
}