import { Link } from "react-router-dom";

export function BrandHeader({ onOpenMenu }) {
  return (
    <div className="m-0 flex w-full items-center justify-between gap-3 lg:w-fit">
      {/* Brand: icon + wordmark */}
      <Link
        to="/"
        className="flex min-w-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md sm:gap-3"
        aria-label="Ir al inicio">
        <img
          src="/logo.png"
          alt="Dispromed"
          className="h-10 w-10 object-contain drop-shadow-sm sm:h-14 sm:w-14 md:h-14 md:w-14 lg:h-16 lg:w-16"
        />

        <img
          src="/dispromed_wordmark.svg"
          alt="Dispromed"
          className="block h-5 w-auto max-w-[9.5rem] drop-shadow-sm sm:h-8 sm:max-w-none lg:h-9"
        />
      </Link>

      {/* Right: burger (mobile only) */}
      <button
        onClick={onOpenMenu}
        className="rounded-lg bg-white/95 p-2 shadow-md transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95 lg:hidden"
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
