export default function ValueCards({ value }) {
  return (
    <div
      className="group relative overflow-hidden flex flex-col items-center text-center gap-5 rounded-2xl p-7 w-64 bg-white shadow-xl cursor-default">
      {/* Liquid fill layer */}
      <div
        className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-y-100"
        style={{
          background:
            "linear-gradient(to top right, #2f6a15, #469720, rgba(137,255,84,0.75))",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center transition-[filter] duration-200 group-hover:brightness-0 group-hover:invert">
        {value.icon()}
      </div>

      {/* Separator */}
      <div
        className="relative z-10 w-10 h-px rounded-full bg-[rgba(70,151,32,0.25)] transition-colors duration-200 group-hover:bg-[rgba(255,255,255,0.35)]"
      />

      {/* Title */}
      <h3
        className="relative z-10 font-semibold text-base uppercase tracking-wide leading-snug text-ink transition-colors duration-200 group-hover:text-white">
        {value.title}
      </h3>

      {/* Description — always visible, muted by default */}
      <p
        className="relative z-10 text-sm leading-relaxed text-ink/50 transition-colors duration-200 group-hover:text-white/90">
        {value.description}
      </p>
    </div>
  );
}
