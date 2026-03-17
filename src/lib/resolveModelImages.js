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
    const hasDescriptionImages = product.images_D?.length > 0;
    const hasCharacteristicsImage = !!product.characteristics?.imgId;

    if (!hasImages && !hasModels && !hasDescriptionImages && !hasCharacteristicsImage) return product;

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

    if (hasDescriptionImages) {
      resolved.images_D = product.images_D.map((img) => ({
        ...img,
        src: img.src || (img.imgId && registry[img.imgId]) || "",
      }));
    }

    if (hasCharacteristicsImage) {
      resolved.characteristics = {
        ...product.characteristics,
        imgSrc: registry[product.characteristics.imgId] || "",
      };
    }

    return resolved;
  });
}
