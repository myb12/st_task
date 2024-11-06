/**
 * Truncates the product title if it exceeds 50 characters.
 * This function ensures that long titles are shortened to fit within UI constraints,
 * appending an ellipsis ("...") to indicate truncation.
 *
 * @param {string} title - The title of the product.
 * @returns {string} - The truncated title if it exceeds 50 characters; otherwise, the original title.
 */
export const truncateTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  }
  return title;
};

/**
 * Determines if a product is eligible for a discount.
 * This function checks if the discount percentage is greater than 10%.
 * Products with a discount over this threshold are considered eligible for a discount badge.
 *
 * @param {number} discountPercentage - The discount percentage of the product.
 * @returns {boolean} - True if eligible for discount badge, false otherwise.
 */
export const isEligibleForDiscount = (discountPercentage) => {
  return discountPercentage > 10;
};

/**
 * Calculates the original price of a product based on the current price and discount percentage.
 * This function is used to show the original price when a product has a discount of more than 10%.
 *
 * Formula: Original Price = Price - (Price * Discount Percentage / 100)
 *
 * @param {number} price - The current price of the product after discount.
 * @param {number} discountPercentage - The discount percentage applied to the product.
 * @returns {string | null} - Original price formatted to two decimal places, or null if discount is not eligible.
 */
export const calcOriginalPrice = (price, discountPercentage) => {
  return discountPercentage > 10
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : null;
};

/**
 * Checks the stock availability of a product.
 * This function uses an imaginary `availabilityStatus` parameter to determine if the product is "In Stock".
 *
 * @param {string} availabilityStatus - The stock status of the product (e.g., "In Stock" or "Out of Stock").
 * @returns {boolean} - True if the product is in stock, false otherwise.
 */
export const inStock = (availabilityStatus) => {
  return availabilityStatus === "In Stock";
};
