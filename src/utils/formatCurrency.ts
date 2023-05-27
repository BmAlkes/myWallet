const formatCurrency = (current: number): string => {
  return current.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export default formatCurrency;
