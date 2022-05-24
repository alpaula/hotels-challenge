export const getLowerValue = (a, b) => Math.min(a, b);

export const formatPrice = value => (
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
);