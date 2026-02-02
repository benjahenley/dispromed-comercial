export function BrandHeader({ onOpenMenu }) {
  return (
    <div className="w-full lg:w-fit flex items-center justify-between  gap-5 m-0">
      {/* Left: icon logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Dispromed"
          className="w-16 h-16 md:w-16 md:h-16 object-contain drop-shadow-md"
        />
      </div>

      {/* Right: wordmark (desktop only) */}
      <img
        src="/dispromed_wordmark.svg"
        alt="Dispromed"
        className="hidden md:block h-8 md:h-10 w-auto drop-shadow-sm"
      />

      {/* Right: burger (mobile only) */}
      <button
        onClick={onOpenMenu}
        className="md:hidden p-2.5 rounded-lg bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        aria-label="Abrir menú">
        <svg
          className="w-6 h-6 text-brand-400 drop-shadow-sm"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
