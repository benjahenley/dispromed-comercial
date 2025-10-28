import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-brand-200 shadow-xl z-50 w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6">
          {categories.map((cat) => (
            <div key={cat.id}>
              <Link
                to={`/productos?category=${normalizeString(cat.name)}`}
                className="block font-semibold text-brand-400 hover:text-brand-300 mb-4 text-base transition-colors">
                {cat.name}
              </Link>
              <ul className="space-y-2.5">
                {cat.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      to={`/productos?category=${normalizeString(
                        cat.name
                      )}&sub=${normalizeString(sub.name)}`}
                      className="block text-sm text-ink/70 hover:text-brand-300 transition-all">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
