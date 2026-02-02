import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const href = `/productos/${product.id}`;

  const cover = product.images?.find((img) => img?.src)?.src || ""; // put a real fallback image url here if you have one

  const badges = product.badges ?? []; // keep if you later add badges to JS data

  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-300/25">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-ink/5">
        {cover ? (
          <img
            src={cover}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-ink/40">
            Sin imagen
          </div>
        )}

        {/* Badges overlay */}
        {badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="rounded-full border border-ink/10 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-ink/80 backdrop-blur">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-brand-300">
          {product.title}
        </h3>

        {product.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70">
            {product.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between gap-3"></div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-ink/50">Ver detalles</span>
          <span className="text-ink/40 transition group-hover:translate-x-0.5 group-hover:text-brand-300">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
