import { useMemo } from "react";
import { products } from "../data/products/products";
import { searchProducts } from "../lib/filters";

const MIN_QUERY_LENGTH = 3;

export function useProductSearch(query) {
  const results = useMemo(
    () => searchProducts(products, query),
    [query],
  );

  const isActive = query.trim().length >= MIN_QUERY_LENGTH;

  return { results, isActive };
}
