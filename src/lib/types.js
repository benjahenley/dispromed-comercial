/**
 * @typedef {Object} SpecTable
 * @property {string[]} headers
 * @property {string[][]} rows
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} [description]
 * @property {string} image
 * @property {string} categoryId
 * @property {string} [subcategoryId]
 * @property {string} [priceDisplay]
 * @property {SpecTable} [table]
 * @property {string[]} [badges]
 */

/**
 * @typedef {Object} Subcategory
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {Subcategory[]} subcategories
 */

export { };
