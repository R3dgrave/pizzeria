// FUNCION PARA FORMATEAR NÚMEROS COMO MONEDA
export const formatCurrency = (amount) => {
  return amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};


