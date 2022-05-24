export const getLowerValue = (a, b) => Math.min(a, b);

export const formatPrice = value => (
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
);

export const getBreakfastList = (list) => (
  list.filter(hotel => hotel.breakfast)
);

export const getTourList = (list) => (
  list.filter(hotel => hotel.tour)
);

export const getTourAndBreakfastList = (list) => (
  list.filter(hotel => hotel.tour && hotel.breakfast)
);