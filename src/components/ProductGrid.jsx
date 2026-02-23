import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  hasFilters = false,
  onViewAll,
  onClearFilters,
}) {
  if (products.length === 0) {
    return (
      <div className="py-10 sm:py-14">
        <div className="mx-auto max-w-[600px] rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-[0_14px_40px_rgba(16,18,21,0.08)] sm:p-10">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-brand-100/10 text-brand-300">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.5 9.5h4m-4 2.5h2"
              />
            </svg>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-ink">
            No encontramos productos con esos filtros
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">
            Probá ajustando la categoría o limpiando filtros para ver todo el
            catálogo disponible.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClearFilters}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-ink/15 bg-white px-5 text-sm font-semibold text-ink/75 transition hover:border-brand-300/35 hover:text-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-300/15">
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <div
          key={product.id}
          className="anim-bubble"
          style={{ animationDelay: `${60 + idx * 35}ms` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
