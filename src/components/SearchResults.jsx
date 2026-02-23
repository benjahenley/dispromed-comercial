import { Link } from "react-router-dom";
import categories from "../data/categories.json";

const categoryNameById = Object.fromEntries(
  categories.map((category) => [category.id, category.name]),
);

export default function SearchResults({ results, isActive, onSelect }) {
  if (!isActive) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-ink/10 bg-white shadow-xl overflow-hidden">
      {results.length === 0 ? (
        <p className="px-4 py-6 text-center text-sm text-ink/50">
          No se encontraron productos.
        </p>
      ) : (
        <ul className="max-h-72 overflow-y-auto py-1">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                to={`/productos/${product.navProductId}`}
                onClick={onSelect}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-brand-100/10">
                {product.images?.[0]?.src ? (
                  <img
                    src={product.images[0].src}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-lg object-cover bg-ink/5"
                  />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink/5 text-[10px] text-ink/30">
                    —
                  </span>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">
                    {product.title}
                  </p>
                  <p className="truncate text-xs text-ink/50">
                    {categoryNameById[product.categoryId] ?? product.categoryId}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
