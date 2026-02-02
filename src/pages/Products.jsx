import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { products } from "../data/products";
import categories from "../data/categories.json";
import { CategorySidebar } from "../components/CategorySidebar";
import { ProductGrid } from "../components/ProductGrid";
import { Pagination } from "../components/Pagination";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  filterProducts,
  sortProducts,
  paginateProducts,
  normalizeString,
} from "../lib/filters";
import { getParam } from "../lib/useQueryState";
import { SecondaryNavbar } from "../components/navbar/SecondaryNavbar";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = getParam(searchParams, "category", "");
  const sub = getParam(searchParams, "sub", "");
  const sort = getParam(searchParams, "sort", "title-asc");
  const limit = Number(getParam(searchParams, "limit", "12"));
  const offset = Number(getParam(searchParams, "offset", "0"));

  const filteredAndSorted = useMemo(() => {
    let result = filterProducts(products, category, sub);
    result = sortProducts(result, sort);
    return result;
  }, [category, sub, sort]);

  const paginatedProducts = useMemo(() => {
    return paginateProducts(filteredAndSorted, limit, offset);
  }, [filteredAndSorted, limit, offset]);

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", e.target.value);
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    const newParams = new URLSearchParams();
    if (value) newParams.set("category", value);

    newParams.set("sort", sort);
    // reset dependent params
    newParams.delete("sub");
    newParams.delete("offset");

    setSearchParams(newParams);
  };

  const handleSubChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("sub", value);
    } else {
      newParams.delete("sub");
    }
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const breadcrumbs = [];

  // Always show "Productos" as base
  if (category) {
    const cat = categories.find((c) => normalizeString(c.name) === category);
    if (cat) {
      breadcrumbs.push({
        label: "Productos",
        href: "/productos",
      });
      breadcrumbs.push({
        label: cat.name,
        href: sub ? `/productos?category=${category}` : undefined,
      });
      if (sub) {
        const subcat = cat.subcategories.find(
          (s) => normalizeString(s.name) === sub,
        );
        if (subcat) {
          breadcrumbs.push({ label: subcat.name });
        }
      }
    }
  } else {
    breadcrumbs.push({ label: "Productos" });
  }

  const currentCategory = categories.find(
    (c) => normalizeString(c.name) === category,
  );

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbs} />

        {/* Mobile Filters */}
        <div className="lg:hidden mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Productos</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="mobile-category"
                className="block text-sm font-medium mb-2">
                Categoría
              </label>
              <select
                id="mobile-category"
                value={category}
                onChange={handleCategoryChange}
                className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300">
                <option value="">Todas las categorías</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={normalizeString(cat.name)}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {category && currentCategory && (
              <div>
                <label
                  htmlFor="mobile-sub"
                  className="block text-sm font-medium mb-2">
                  Subcategoría
                </label>
                <select
                  id="mobile-sub"
                  value={sub}
                  onChange={handleSubChange}
                  className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300">
                  <option value="">Todas</option>
                  {currentCategory.subcategories &&
                    currentCategory.subcategories.map((subcat) => (
                      <option
                        key={subcat.id}
                        value={normalizeString(subcat.name)}>
                        {subcat.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-ink/60">
              {filteredAndSorted.length}{" "}
              {filteredAndSorted.length === 1 ? "producto" : "productos"}
            </span>
            <div className="flex items-center gap-2">
              <label htmlFor="mobile-sort" className="text-sm font-medium">
                Ordenar:
              </label>
              <select
                id="mobile-sort"
                value={sort}
                onChange={handleSortChange}
                className="px-3 py-1.5 border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300">
                <option value="title-asc">A-Z</option>
                <option value="title-desc">Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <CategorySidebar />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">
                {category
                  ? categories.find((c) => normalizeString(c.name) === category)
                      ?.name || "Productos"
                  : "Todos los Productos"}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-ink/60">
                  {filteredAndSorted.length}{" "}
                  {filteredAndSorted.length === 1 ? "producto" : "productos"}
                </span>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium">
                    Ordenar:
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300">
                    <option value="title-asc">A-Z</option>
                    <option value="title-desc">Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            <ProductGrid products={paginatedProducts} />
            <Pagination
              total={filteredAndSorted.length}
              limit={limit}
              offset={offset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
