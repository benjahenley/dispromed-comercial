// Auto-generated: grouped product JSON imports + helpers.
// Adjust import paths as needed for your project structure.

import suturasMecanicasYLaparoscopia from "./suturas-mecanicas-y-laparoscopia.json";
import selladoresDeVasos from "./selladores-de-vasos.json";

export const productGroups = [
  suturasMecanicasYLaparoscopia,
  selladoresDeVasos,
];

export const products = productGroups.flatMap(g => g.products);

export function getProductById(id) {
  return products.find(p => p.id === id) ?? null;
}

export function getProductsByNavProductId(navProductId) {
  return products.filter(p => p.navProductId === navProductId);
}

export function getProductsByCategoryId(categoryId) {
  return products.filter(p => p.categoryId === categoryId);
}

export function getProductsBySubcategoryId(subcategoryId) {
  return products.filter(p => p.subcategoryId === subcategoryId);
}
