import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <Link
      to={`/productos/${product.slug}`}
      className="bg-white border border-ink/10 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square overflow-hidden bg-ink/5">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {product.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 border border-brand-200 text-brand-400 bg-brand-100/10">
                {badge}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-semibold text-ink group-hover:text-brand-300 transition-colors mb-2 line-clamp-2">
          {product.title}
        </h3>

        {product.description && (
          <p className="text-sm text-ink/70 line-clamp-2 mb-3">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm text-ink/60">{product.category}</span>
          {product.priceDisplay && (
            <span className="text-sm font-medium text-brand-300">
              {product.priceDisplay}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
