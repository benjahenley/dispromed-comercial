/**
 * Resuelve imgId contra el registro en los arrays images[] y models[] de cada producto.
 * @param {import('./types').Product[]} products
 * @param {Record<string, string>} registry  — imgId → src
 * @returns {import('./types').Product[]}
 */
export function resolveModelImages(products, registry) {
  return products.map((product) => {
    const hasImages = product.images?.length > 0;
    const hasModels = product.models?.length > 0;

    if (!hasImages && !hasModels) return product;

    const resolved = { ...product };

    if (hasImages) {
      resolved.images = product.images.map((img) => ({
        ...img,
        src: img.src || (img.imgId && registry[img.imgId]) || "",
      }));
    }

    if (hasModels) {
      resolved.models = product.models.map((model) => ({
        ...model,
        src: (model.imgId && registry[model.imgId]) || "",
      }));
    }

    return resolved;
  });
}
