import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { projectInfo } from "../../data/siteData";

const whatsappNumber = projectInfo.phone.replace(/[^\d]/g, "");

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'm interested in SHD Industrial Park. Please share more details."
)}`;

export default function FloatingButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      {/* WhatsApp */}

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-end"
      >
        {/* Label */}

        <span className="absolute right-16 rounded-full bg-white px-4 py-2 text-sm font-medium text-forest-700 shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap">
          WhatsApp
        </span>

        {/* Pulse Ring */}

        <span className="absolute h-14 w-14 rounded-full bg-[#25D366]/30 animate-ping"></span>

        {/* Button */}

        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(37,211,102,0.45)] border-4 border-white">
          <MessageCircle
            size={26}
            className="text-white"
            fill="white"
            strokeWidth={0}
          />
        </div>
      </motion.a>

      {/* Call */}

      <motion.a
        href={`tel:${projectInfo.phone}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-end"
      >
        {/* Label */}

        <span className="absolute right-16 rounded-full bg-white px-4 py-2 text-sm font-medium text-forest-700 shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap">
          Call Now
        </span>

        {/* Button */}

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-forest-700 to-forest-950 border-4 border-white shadow-[0_12px_30px_rgba(11,61,31,0.35)]">
          <Phone size={24} className="text-white" />
        </div>
      </motion.a>
    </motion.div>
  );
}