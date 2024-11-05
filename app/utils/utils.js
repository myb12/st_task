export const truncateTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  }
  return title;
};

export const isEligibleForDiscount = (discountPercentage) => {
  return discountPercentage > 10;
};

export const isFavourite = (rating) => {
  return rating > 4;
};

export const calcOriginalPrice = (price, discountPercentage) => {
  return discountPercentage > 10
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : null;
};

export const inStock = (availabilityStatus) => {
  return availabilityStatus === "In Stock";
};
