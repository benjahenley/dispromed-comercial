import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";

export function CategorySidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openCategory, setOpenCategory] = useState();

  const currentCategory = searchParams.get("category") || "";
  const currentSub = searchParams.get("sub") || "";

  // (optional) quick lookup for active category id
  const activeCategoryId = useMemo(() => {
    if (!currentCategory) return null;
    const cat = categories.find(
      (c) => normalizeString(c.name) === currentCategory,
    );
    return cat?.id ?? null;
  }, [currentCategory]);

  useEffect(() => {
    if (activeCategoryId) setOpenCategory(activeCategoryId);
  }, [activeCategoryId]);

  const toggleCategory = (catId) => {
    setOpenCategory((prev) => (prev === catId ? null : catId));
  };

  const handleCategoryClick = (catName) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", normalizeString(catName));
    newParams.delete("sub");
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleSubcategoryClick = (catName, subName) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", normalizeString(catName));
    newParams.set("sub", normalizeString(subName));
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleClearFilters = () => setSearchParams({});

  const hasFilters = Boolean(currentCategory || currentSub);

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="lg:sticky lg:top-24">
        <div className="">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-ink/10 p-4 sm:p-5">
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                Categorías
              </h2>
              <p className="mt-0.5 text-xs text-ink/50">
                Filtrá por categoría y subcategoría
              </p>
            </div>

            {hasFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/70 transition hover:border-brand-300/40 hover:text-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-300/20">
                Limpiar
              </button>
            )}
          </div>

          {/* List */}
          <div className="p-2 sm:p-3">
            <div className="space-y-1">
              {categories.map((cat) => {
                const isOpen = openCategory === cat.id;
                const isActive = normalizeString(cat.name) === currentCategory;

                return (
                  <div
                    key={cat.id}
                    className={`overflow-hidden rounded-2xl border transition ${
                      isOpen || isActive
                        ? "border-brand-300/25 bg-brand-100/10"
                        : "border-ink/10 bg-white"
                    }`}>
                    {/* Category row */}
                    <button
                      onClick={
                        cat.subcategories
                          ? () => toggleCategory(cat.id)
                          : () => {}
                      }
                      className="flex w-full items-center justify-between gap-3 p-3 text-left focus:outline-none focus:ring-4 focus:ring-brand-300/15"
                      aria-expanded={isOpen}>
                      <span className="min-w-0">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(cat.name);
                          }}
                          className={`block truncate text-sm font-medium transition ${
                            isActive
                              ? "text-brand-300"
                              : "text-ink hover:text-brand-300"
                          }`}>
                          {cat.name}
                        </span>
                      </span>
                      {cat.subcategories && (
                        <span
                          className={`flex flex-shrink-0  h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/70 transition ${
                            isOpen
                              ? "rotate-180 border-brand-300/30 text-brand-300"
                              : "group-hover:text-brand-300"
                          }`}
                          aria-hidden="true">
                          <svg
                            className="h-4 w-4"
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
                        </span>
                      )}
                    </button>

                    {/* Subcategories */}
                    {cat.subcategories && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}>
                        <div className="min-h-0 overflow-hidden">
                          <div className="border-t border-ink/10 px-3 pb-3">
                            <ul className="mt-2 space-y-1">
                              {cat.subcategories.map((sub) => {
                                const isSubActive =
                                  normalizeString(cat.name) ===
                                    currentCategory &&
                                  normalizeString(sub.name) === currentSub;

                                return (
                                  <li key={sub.id}>
                                    <button
                                      onClick={() =>
                                        handleSubcategoryClick(
                                          cat.name,
                                          sub.name,
                                        )
                                      }
                                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition focus:outline-none focus:ring-4 focus:ring-brand-300/15 ${
                                        isSubActive
                                          ? "bg-white text-brand-300 shadow-sm"
                                          : "text-ink/70 hover:bg-ink/5 hover:text-brand-300"
                                      }`}>
                                      <span className="truncate">
                                        {sub.name}
                                      </span>
                                      {isSubActive && (
                                        <span className="text-xs font-medium text-brand-300">
                                          Activo
                                        </span>
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer hint */}
          <div className="border-t border-ink/10 p-4 text-center text-xs text-ink/50">
            Tip: podés combinar categoría + subcategoría
          </div>
        </div>
      </div>
    </aside>
  );
}
