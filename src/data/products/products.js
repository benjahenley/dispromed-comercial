// Auto-generated: grouped product JSON imports + helpers.
// Adjust import paths as needed for your project structure.

import suturasMecanicasYLaparoscopia from "./suturas-mecanicas-y-laparoscopia.json";
import selladoresDeVasos from "./selladores-de-vasos.json";
import energia from "./energia.json";
import hilosDeSuturas from "./hilos-de-suturas.json";
import mallasYFijadores from "./mallas-y-fijadores.json";
import hospitalario from "./hospitalario.json";
import barcat from "./barcat.json";
import imageRegistry from "../imageRegistry";
import { resolveModelImages } from "../../lib/resolveModelImages";

export const productGroups = [
  suturasMecanicasYLaparoscopia,
  selladoresDeVasos,
  energia,
  hilosDeSuturas,
  mallasYFijadores,
  hospitalario,
  barcat,
];

const rawProducts = productGroups.flatMap(g => g.products);
export const products = resolveModelImages(rawProducts, imageRegistry);

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
