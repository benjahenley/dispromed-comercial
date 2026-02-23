import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import { normalizeString } from "../lib/filters";
import { products } from "../data/products/products";
import { useState, useEffect } from "react";

export function MegaMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClose,
  topPaddingClass = "pt-10",
  positionClass = "absolute",
  variant = "full",
  tipClass = "left-1/2 -translate-x-1/2",
}) {
  const [subItems, setSubItems] = useState("");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Double RAF ensures the element is fully painted before the transition starts,
      // preventing the jank on initial appearance.
      let raf1, raf2;
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        setMounted(false);
        setSubItems("");
      }, 420);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const isFloating = variant === "floating";

  return (
    <div
      className={`${positionClass} left-0 right-0 z-[180] w-full ${topPaddingClass} transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div
        className={
          isFloating
            ? "mx-auto max-w-7xl px-4 lg:px-6"
            : "max-w-7xl mx-auto px-6 pb-10"
        }>
        <div
          className={
            isFloating
              ? "relative mx-auto w-[min(96vw,1180px)] rounded-[28px] border border-white/30 bg-white/55 shadow-xl backdrop-blur px-6 pb-8 pt-7 lg:px-8"
              : "relative rounded-[28px] border border-white/30 bg-white/55 shadow-xl backdrop-blur px-6 pb-8 pt-7 lg:px-8"
          }>
          <div
            className={`relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-6`}>
            {categories.map((cat) => {
              const isEnergyCategory = cat.id === "energia";
              const energyItems = isEnergyCategory
                ? products
                    .filter((p) => p.categoryId === "energia")
                    .map((p) => ({
                      id: p.id,
                      name: p.title,
                      navProductId: p.navProductId,
                    }))
                : [];

              const categoryProduct = isEnergyCategory
                ? energyItems
                : cat.subcategories
                ? cat.subcategories
                : cat.products
                ? cat.products
                : [];

              return (
                <div key={cat.id}>
                  <Link
                    to={`/productos?category=${normalizeString(cat.name)}`}
                    onClick={onClose}
                    className="block font-semibold text-brand-400 hover:text-brand-300 mb-4 text-base transition-colors">
                    {cat.name}
                  </Link>
                  <ul className="space-y-2.5">
                    {categoryProduct.map((sub) => {
                      const hasSubProducts =
                        !sub.navProductId &&
                        cat.id !== "selladores-de-vasos" &&
                        sub.products?.length > 0;
                      const isExpanded = subItems === sub.id;

                      return (
                        <li
                          key={sub.id}
                          className="mb-2"
                          onMouseEnter={() => {
                            if (hasSubProducts) setSubItems(sub.id);
                          }}
                          onMouseLeave={() => {
                            if (hasSubProducts) setSubItems("");
                          }}>
                          <Link
                            to={
                              sub.navProductId
                                ? `/productos/${sub.navProductId}`
                                : `/productos?category=${normalizeString(
                                    cat.name
                                  )}&sub=${normalizeString(sub.name)}`
                            }
                            onClick={onClose}
                            className="text-sm text-ink/70 hover:text-accent-300 transition-colors duration-150 font-medium flex flex-row gap-2 items-center">
                            {sub.name}
                            {hasSubProducts && (
                              <svg
                                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
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
                            )}
                          </Link>

                          {/* Smooth height + fade for nested products */}
                          {hasSubProducts && (
                            <div
                              className={`grid transition-all duration-200 ease-out ${
                                isExpanded
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}>
                              <ul className="overflow-hidden pl-1 mt-1 space-y-1 text-xs">
                                {sub.products.map((slug) => {
                                  const product = products.find(
                                    (p) =>
                                      p.navProductId === slug || p.slug === slug
                                  );
                                  const displayName = product
                                    ? product.title
                                    : slug
                                        .replace(/-/g, " ")
                                        .replace(/\b\w/g, (l) =>
                                          l.toUpperCase()
                                        );
                                  return (
                                    <li
                                      key={slug}
                                      className="border-l-[3px] border-transparent hover:border-brand-400 pl-2 transition-colors duration-150">
                                      <Link
                                        to={`/productos/${slug}`}
                                        onClick={onClose}
                                        className="block text-xs text-ink/60 transition-colors duration-150">
                                        {displayName}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
