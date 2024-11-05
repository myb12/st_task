export const truncateTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  }
  return title;
};

export const isEligibleForDiscount = (discountPercentage) => {
  return discountPercentage > 10;
};
