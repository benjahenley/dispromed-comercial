export function PageHero({ title, subtitle, compact = false }) {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-linear-to-b from-brand-100/25 via-white to-white" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-100/30 blur-3xl" />

      <div
        className={`relative max-w-7xl mx-auto px-8 flex items-center w-full m-auto ${
          compact ? "py-6 sm:py-8" : "py-10 sm:py-14"
        }`}>
        <div className="w-full anim-bubble text-center">
          <h1
            className={`text-3xl sm:text-4xl font-semibold text-ink anim-bubble anim-bubble-d1 ${
              compact ? "mt-2" : "mt-4"
            }`}>
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-ink/70 leading-relaxed anim-bubble anim-bubble-d2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
