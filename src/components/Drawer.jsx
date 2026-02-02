import { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";

export function Drawer({ isOpen, onClose }) {
  const [openItem, setOpenItem] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const toggleCategory = (catId) => {
    setOpenItem(openItem === catId ? null : catId);
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
            className="block py-3 font-medium hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Inicio
          </Link>

          <div className="">
            <button
              onClick={() => toggleCategory("productos")}
              className="flex items-center justify-between w-full py-3 font-medium hover:text-brand-300 transition-colors">
              <span>Productos</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openItem === "productos" ? "rotate-180" : ""
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

            {openItem === "productos" && (
              <div className="pl-4 pb-2">
                {categories.map((cat) => (
                  <div key={cat.id} className="mb-3">
                    <Link
                      to={`/productos?category=${normalizeString(cat.name)}`}
                      className="block py-2 font-medium text-sm hover:text-brand-300 transition-colors"
                      onClick={() => setOpenCategory(cat.name)}>
                      {cat.name}
                    </Link>
                    {openCategory === cat.name && (
                      <ul className="pl-4 space-y-1">
                        {cat.subcategories.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={`/productos?category=${normalizeString(
                                cat.name
                              )}&sub=${normalizeString(sub.name)}`}
                              className="block py-1.5 text-sm text-ink/70 hover:text-brand-300 transition-colors"
                              onClick={onClose}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/catalogos"
            className="block py-3 font-medium hover:text-brand-300 transition-colors "
            onClick={onClose}>
            Catálogos
          </Link>
          <Link
            to="/novedades"
            className="block py-3 font-medium hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Novedades
          </Link>
          <Link
            to="/contacto"
            className="block py-3 font-medium hover:text-brand-300 transition-colors"
            onClick={onClose}>
            Contacto
          </Link>
        </nav>
      </div>
    </>
  );
}
