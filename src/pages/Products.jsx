import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { products } from "../data/products/products";
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

  const breadcrumbs = [{ label: "Inicio", href: "/" }];

  if (category) {
    const cat = categories.find((c) => normalizeString(c.name) === category);
    if (cat) {
      breadcrumbs.push({ label: "Productos", href: "/productos" });
      breadcrumbs.push({
        label: cat.name,
        href: sub ? `/productos?category=${category}` : undefined,
      });
      if (sub) {
        const subcat = cat.subcategories?.find(
          (s) => normalizeString(s.name) === sub
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
    (c) => normalizeString(c.name) === category
  );
  const currentSubcategory = currentCategory?.subcategories?.find(
    (s) => normalizeString(s.name) === sub
  );
  const productsHeading = currentCategory?.name || "Productos";
  const hasActiveFilters = Boolean(category || sub);

  const handleClearAllFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("category");
    newParams.delete("sub");
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  const handleRemoveSubFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("sub");
    newParams.delete("offset");
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="lg:hidden anim-bubble anim-bubble-d1">
          <Breadcrumbs items={breadcrumbs} hideSingleItemLabel />
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden mb-6 space-y-4 anim-bubble anim-bubble-d2">
          <div className="flex items-center justify-between">
            <h1
              title="Productos"
              className="truncate text-2xl font-semibold tracking-tight">
              Productos
            </h1>
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
                className="cursor-pointer appearance-none bg-white px-3 py-1.5 border border-ink/10 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-300">
                <option value="title-asc">A-Z</option>
                <option value="title-desc">Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block anim-bubble anim-bubble-d1">
            <CategorySidebar />
          </div>

          {/* Products */}
          <div className="flex-1 anim-bubble anim-bubble-d2">
            <div className="hidden lg:block mb-8">
              <h1
                title={productsHeading}
                className="max-w-[70%] truncate text-2xl font-semibold tracking-tight text-ink">
                {productsHeading}
              </h1>
              <div className="mt-2 [&_ol]:text-xs [&_a]:text-ink/45 [&_a:hover]:text-ink/70 [&_span]:text-ink/55">
                <Breadcrumbs items={breadcrumbs} hideSingleItemLabel />
              </div>
              <div className="mt-4 flex items-center justify-between">
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
                    className="cursor-pointer appearance-none bg-white px-3 py-2 border border-ink/10 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-300">
                    <option value="title-asc">A-Z</option>
                    <option value="title-desc">Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {sub && (
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/5 px-3 py-1.5 text-xs font-medium text-ink/70">
                  <span>
                    Filtro activo:{" "}
                    <span className="font-semibold text-ink/90">
                      {currentSubcategory?.name || sub}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={handleRemoveSubFilter}
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/10 hover:text-ink"
                    aria-label="Quitar filtro activo">
                    ✕
                  </button>
                </div>
              </div>
            )}

            <ProductGrid
              products={paginatedProducts}
              hasFilters={hasActiveFilters}
              onViewAll={handleClearAllFilters}
              onClearFilters={handleClearAllFilters}
            />
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
