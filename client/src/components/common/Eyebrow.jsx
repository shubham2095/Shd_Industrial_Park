export default function Eyebrow({ children, dark = false, className = "" }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] uppercase mb-4 ${
        dark ? "text-gold-300" : "text-forest-700"
      } ${className}`}
    >
      <span className={`h-px w-6 ${dark ? "bg-gold-300" : "bg-gold-500"}`} />
      {children}
    </p>
  );
}