import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";
import { products } from "../data/products/products";

export function CategorySidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openCategory, setOpenCategory] = useState();

  const currentCategory = searchParams.get("category") || "";
  const currentSub = searchParams.get("sub") || "";

  // (optional) quick lookup for active category id
  const activeCategoryId = useMemo(() => {
    if (!currentCategory) return null;
    const cat = categories.find(
      (c) => normalizeString(c.name) === currentCategory
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

  const handleCategoryRowClick = (cat) => {
    handleCategoryClick(cat.name);
    if (cat.subcategories) {
      toggleCategory(cat.id);
    }
  };

  const handleSubcategoryClick = (catName, subName) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", normalizeString(catName));
    newParams.set("sub", normalizeString(subName));
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleSubcategoryValueClick = (catName, subValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", normalizeString(catName));
    newParams.set("sub", subValue);
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setOpenCategory(null);
    setSearchParams({});
  };

  const hasFilters = Boolean(currentCategory || currentSub);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-ink/10 bg-white/60 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-ink/10 p-5 sm:p-6">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold tracking-tight text-ink/90">
                Categorías
              </h2>
              <p className="mt-0.5 text-xs leading-4 text-ink/50">
                <span className="block">
                  Filtrá por categoría y subcategoría
                </span>
              </p>
            </div>

            <div className="flex w-[88px] justify-end">
              <button
                onClick={handleClearFilters}
                disabled={!hasFilters}
                tabIndex={hasFilters ? 0 : -1}
                aria-hidden={!hasFilters}
                className={`inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/65 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/10 ${
                  hasFilters
                    ? "cursor-pointer hover:border-ink/25 hover:text-ink/85"
                    : "pointer-events-none cursor-not-allowed opacity-0"
                }`}>
                Limpiar
              </button>
            </div>
          </div>

          {/* List */}
          <div className="">
            <div className="space-y-0">
              {categories.map((cat) => {
                const isOpen = openCategory === cat.id;
                const isActive = normalizeString(cat.name) === currentCategory;
                const sidebarSubItems =
                  cat.id === "energia"
                    ? products
                        .filter((p) => p.categoryId === "energia")
                        .map((p) => ({
                          id: p.id,
                          name: p.title,
                          subValue: p.subcategoryId,
                        }))
                    : cat.subcategories || [];
                const hasSubItems = sidebarSubItems.length > 0;

                return (
                  <div
                    key={cat.id}
                    className="overflow-hidden border-b border-ink/8 last:border-b-0">
                    {/* Category row */}
                    <button
                      onClick={() => handleCategoryRowClick(cat)}
                      className={`group flex w-full cursor-pointer items-center justify-between gap-3 px-6 py-3.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/10 ${
                        isActive ? "bg-ink/4" : "hover:bg-ink/4"
                      }`}
                      aria-expanded={isOpen}>
                      <span className="min-w-0">
                        <span
                          className={`block truncate text-sm font-medium transition-colors duration-200 ${
                            isActive
                              ? "text-ink/95"
                              : "text-ink/70 group-hover:text-ink/90"
                          }`}>
                          {cat.name}
                        </span>
                      </span>
                      {hasSubItems && (
                        <span
                          className={`flex flex-shrink-0 items-center justify-center rounded-full text-ink/45 transition-transform duration-250 ${
                            isOpen
                              ? "rotate-180 text-ink/65"
                              : "group-hover:text-ink/65"
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
                    {hasSubItems && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-250 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}>
                        <div className="min-h-0 overflow-hidden">
                          <div className="px-3 pb-3">
                            <ul className="mt-1 space-y-1 pl-4">
                              {sidebarSubItems.map((sub) => {
                                const isSubActive =
                                  normalizeString(cat.name) ===
                                    currentCategory &&
                                  (sub.subValue
                                    ? sub.subValue === currentSub
                                    : normalizeString(sub.name) === currentSub);

                                return (
                                  <li key={sub.id}>
                                    <button
                                      onClick={() => {
                                        if (sub.subValue) {
                                          handleSubcategoryValueClick(
                                            cat.name,
                                            sub.subValue
                                          );
                                        } else {
                                          handleSubcategoryClick(
                                            cat.name,
                                            sub.name
                                          );
                                        }
                                      }}
                                      className={`flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/10 ${
                                        isSubActive
                                          ? "text-ink/90 font-semibold"
                                          : "text-ink/58 hover:text-ink/78"
                                      }`}>
                                      <span className="truncate">
                                        {sub.name}
                                      </span>
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
          <div className="border-t border-ink/10 p-5 text-center text-xs text-ink/45">
            Tip: podés combinar categoría + subcategoría
          </div>
        </div>
      </div>
    </aside>
  );
}
