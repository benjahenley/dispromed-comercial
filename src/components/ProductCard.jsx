import { Link } from "react-router-dom";
import categories from "../data/categories.json";

const subcategoryLabelById = categories.reduce((acc, category) => {
  category.subcategories?.forEach((subcategory) => {
    acc[subcategory.id] = subcategory.name;
  });
  return acc;
}, {});

function formatSubcategoryLabel(product) {
  if (!product.subcategoryId) return "";
  return (
    subcategoryLabelById[product.subcategoryId] ||
    product.subcategoryId.replace(/-/g, " ")
  );
}

export function ProductCard({ product }) {
  const href = `/productos/${product.navProductId || product.id}`;

  const cover = product.images?.find((img) => img?.src)?.src || ""; // put a real fallback image url here if you have one

  const badges = product.badges ?? []; // keep if you later add badges to JS data
  const subcategoryLabel = formatSubcategoryLabel(product);

  return (
    <Link
      to={href}
      className="group block h-full w-full mx-auto max-w-[24rem] lg:max-w-none overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_4px_16px_rgba(16,18,21,0.05)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(16,18,21,0.09)] focus:outline-none focus:ring-4 focus:ring-brand-300/20">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        {cover ? (
          <img
            src={cover}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.035]"
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

        {subcategoryLabel && (
          <div className="absolute right-3 top-3">
            <span className="inline-flex items-center rounded-full border border-ink/10 bg-white/75 px-2 py-0.5 text-[10px] font-medium capitalize tracking-wide text-ink/55 backdrop-blur">
              {subcategoryLabel}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex min-h-[8.8rem] flex-col p-4 sm:p-5">
        <h3 className=" overflow-hidden text-base font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-brand-300">
          {product.title}
        </h3>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-1.5">
          <span className="text-xs text-ink/50">Ver detalles</span>
          <span className="text-ink/40 transition group-hover:translate-x-0.5 group-hover:text-brand-300">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
