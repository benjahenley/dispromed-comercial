/**
 * Filtra productos por categoría y subcategoría
 * @param {import('./types').Product[]} products
 * @param {string} category
 * @param {string} subcategory
 * @returns {import('./types').Product[]}
 */
export function filterProducts(products, category, subcategory) {
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (subcategory) {
    filtered = filtered.filter(
      (p) => p.subcategory?.toLowerCase() === subcategory.toLowerCase()
    );
  }

  return filtered;
}

/**
 * Ordena productos
 * @param {import('./types').Product[]} products
 * @param {string} sortBy
 * @returns {import('./types').Product[]}
 */
export function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "title-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return sorted;
}

/**
 * Pagina productos
 * @param {import('./types').Product[]} products
 * @param {number} limit
 * @param {number} offset
 * @returns {import('./types').Product[]}
 */
export function paginateProducts(products, limit, offset) {
  return products.slice(offset, offset + limit);
}

/**
 * Normaliza strings para comparaciones (slug-friendly)
 * @param {string} str
 * @returns {string}
 */
export function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}
