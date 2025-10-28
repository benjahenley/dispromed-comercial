import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";

export function CategorySidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openCategory, setOpenCategory] = useState(null);

  const currentCategory = searchParams.get("category") || "";
  const currentSub = searchParams.get("sub") || "";

  useEffect(() => {
    if (currentCategory) {
      const cat = categories.find(
        (c) => normalizeString(c.name) === currentCategory
      );
      if (cat) {
        setOpenCategory(cat.id);
      }
    }
  }, [currentCategory]);

  const toggleCategory = (catId) => {
    setOpenCategory(openCategory === catId ? null : catId);
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

  const handleClearFilters = () => {
    setSearchParams({});
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white border border-ink/10 p-4 sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Categorías</h2>
          {(currentCategory || currentSub) && (
            <button
              onClick={handleClearFilters}
              className="text-xs text-brand-300 hover:text-brand-400 transition-colors">
              Limpiar
            </button>
          )}
        </div>

        <div className="space-y-2">
          {categories.map((cat) => {
            const isOpen = openCategory === cat.id;
            const isActive = normalizeString(cat.name) === currentCategory;

            return (
              <div key={cat.id} className="border-b border-ink/5 pb-2">
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex items-center justify-between w-full py-2 font-medium text-left transition-colors ${
                    isActive ? "text-brand-300" : "hover:text-brand-300"
                  }`}>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(cat.name);
                    }}>
                    {cat.name}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${
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

                {isOpen && (
                  <ul className="pl-4 space-y-1 mt-1">
                    {cat.subcategories.map((sub) => {
                      const isSubActive =
                        normalizeString(cat.name) === currentCategory &&
                        normalizeString(sub.name) === currentSub;

                      return (
                        <li key={sub.id}>
                          <button
                            onClick={() =>
                              handleSubcategoryClick(cat.name, sub.name)
                            }
                            className={`block w-full text-left py-1.5 text-sm transition-colors ${
                              isSubActive
                                ? "text-brand-300 font-medium"
                                : "text-ink/70 hover:text-brand-300"
                            }`}>
                            {sub.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
