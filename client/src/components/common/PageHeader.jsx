export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <div className="relative overflow-hidden bg-paper pt-32 pb-16 md:pt-40 md:pb-20 border-b border-forest-950/10">
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,61,31,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,31,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] uppercase text-forest-700 mb-4">
          <span className="h-px w-6 bg-gold-500" />
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-ink-900 max-w-2xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-ink-900/70 max-w-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}