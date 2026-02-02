import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";
import { products } from "../data/products/products";
import { useState } from "react";

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }) {
  const [subItems, setSubItems] = useState("");

  if (!isOpen) return null;
  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-brand-200 shadow-xl z-50 w-full pt-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-x-6 gap-y-6">
          {categories.map((cat) => {
            const categoryProduct = cat.subcategories
              ? cat.subcategories
              : cat.products
              ? cat.products
              : [];

            return (
              <div key={cat.id}>
                <Link
                  to={`/productos?category=${normalizeString(cat.name)}`}
                  className="block font-semibold text-brand-400 hover:text-brand-300 mb-4 text-base transition-colors">
                  {cat.name}
                </Link>
                <ul className="space-y-2.5">
                  {categoryProduct.map((sub) => (
                    <li
                      key={sub.id}
                      className="mb-2"
                      onMouseEnter={() => setSubItems(sub.id)}
                      onMouseLeave={() => setSubItems("")}>
                      <Link
                        to={`/productos?category=${normalizeString(
                          cat.name,
                        )}&sub=${normalizeString(sub.name)}`}
                        className="text-sm text-ink/70 hover:text-brand-300 transition-all font-medium flex flex-row gap-2 items-center">
                        {sub.name}{" "}
                        {sub.products && (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </Link>
                      {/* Si hay productos, mostrarlos anidados */}
                      {sub.products &&
                        sub.products.length > 0 &&
                        subItems === sub.id && (
                          <ul className="pl-2 mt-1 space-y-1 border-l border-gray-400 text-xs">
                            {sub.products.map((slug) => {
                              // Buscar producto en products por slug, si no existe usar el slug formateado
                              const product = products.find(
                                (p) => p.slug === slug,
                              );
                              const displayName = product
                                ? product.title
                                : slug
                                    .replace(/-/g, " ")
                                    .replace(/\b\w/g, (l) => l.toUpperCase());
                              return (
                                <li key={slug}>
                                  <Link
                                    to={`/productos/${slug}`}
                                    className="block text-xs text-ink/60 hover:text-brand-400 transition-all pl-2">
                                    {displayName}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
