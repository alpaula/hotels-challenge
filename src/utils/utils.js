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

export const ascendingOrderList = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

export const descendingOrderList = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

export const orderBiggerClassificationList = (list) => {
  return list.sort((a, b) => descendingOrderList(a.classification, b.classification));
}

export const orderLowerClassificationList = (list) => {
  return list.sort((a, b) => ascendingOrderList(a.classification, b.classification));
}

export const orderBiggerValueList = (list) => {
  return list.sort((a, b) => {
    const valueA = getLowerValue(a.prices.week, a.prices.weekend);
    const valueB = getLowerValue(b.prices.week, b.prices.weekend);

    return descendingOrderList(valueA, valueB);
  });
}

export const orderLowerValueList = (list) => {
  return list.sort((a, b) => {
    const valueA = getLowerValue(a.prices.week, a.prices.weekend);
    const valueB = getLowerValue(b.prices.week, b.prices.weekend);

    return ascendingOrderList(valueA, valueB);
  });
}