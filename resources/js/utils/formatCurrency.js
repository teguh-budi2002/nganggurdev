export const formatCurrencyIDR = (val) => {
  const newVal = typeof val === "number" ? val : parseFloat(val);
  return newVal
      ? newVal.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
      : "";
};