import { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";
import { products } from "../data/products/products";

export function Drawer({ isOpen, onClose }) {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (catId) => {
    setOpenCategoryId((prev) => (prev === catId ? null : catId));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-ink/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true">
        <div className="flex items-center justify-between p-4 border-b border-ink/10">
          <span className="font-semibold text-lg">Menú</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ink/5 transition-colors"
            aria-label="Cerrar menú">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <Link
            to="/"
            className="block py-3 font-medium text-ink visited:text-ink hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Inicio
          </Link>

          <div>
            <Link
              to="/productos"
              className="block py-3 font-medium text-ink visited:text-ink hover:text-brand-300 transition-colors"
              onClick={onClose}>
              Productos
            </Link>

            <div className="pl-4 pb-2">
              {categories.map((cat) => {
                const subItems =
                  cat.id === "energia"
                    ? products
                        .filter((p) => p.categoryId === "energia")
                        .map((p) => ({
                          id: p.id,
                          name: p.title,
                          navProductId: p.navProductId,
                        }))
                    : cat.subcategories || [];
                const isOpen = openCategoryId === cat.id;

                return (
                  <div key={cat.id} className="mb-2">
                    <div
                      className="group flex items-center justify-between rounded-md pr-1 hover:bg-ink/5"
                      onClick={() => toggleCategory(cat.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          toggleCategory(cat.id);
                        }
                      }}>
                      <Link
                        to={`/productos?category=${normalizeString(cat.name)}`}
                        className="block py-2 pr-2 font-medium text-sm text-ink/80 visited:text-ink/80 hover:text-brand-300 transition-colors"
                        onClick={(event) => {
                          event.stopPropagation();
                          onClose();
                        }}>
                        {cat.name}
                      </Link>
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Cerrar" : "Abrir"} ${
                          cat.name
                        }`}
                        aria-expanded={isOpen}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink/60 transition-colors group-hover:text-brand-300 hover:bg-ink/10"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleCategory(cat.id);
                        }}>
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
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
                      </button>
                    </div>

                    {isOpen && (
                      <ul className="pl-4 space-y-1">
                        {subItems.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={
                                sub.navProductId
                                  ? `/productos/${sub.navProductId}`
                                  : `/productos?category=${normalizeString(
                                      cat.name
                                    )}&sub=${normalizeString(sub.name)}`
                              }
                              className="block py-1.5 text-sm text-ink/70 visited:text-ink/70 hover:text-brand-300 transition-colors"
                              onClick={onClose}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            to="/novedades"
            className="block py-3 font-medium text-ink visited:text-ink hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Novedades
          </Link>
          <Link
            to="/contacto"
            className="block py-3 font-medium text-ink visited:text-ink hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Contacto
          </Link>
        </nav>
      </div>
    </>
  );
}
