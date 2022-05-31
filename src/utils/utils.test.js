import {
  getLowerValue,
  formatPrice,
  getBreakfastList,
  getTourList,
  getTourAndBreakfastList,
  ascendingOrderList,
  descendingOrderList,
  orderBiggerClassificationList,
  orderLowerClassificationList,
  orderBiggerValueList,
  orderLowerValueList,
} from './utils';

test('format values', () => {
  const price = formatPrice(12);

  expect(price).toBe('R$ 12,00');
});

test('get lower value', () => {
  const value = getLowerValue(4, 7);

  expect(value).toBe(4);
});

test('filter to itens has breakfast', () => {
  const list = [{ id: '1', breakfast: true }, { id: '2', breakfast: false }];

  const filteredList = getBreakfastList(list);

  expect(filteredList).toEqual([{ id: '1', breakfast: true }]);
});

test('filter to itens has tour', () => {
  const list = [{ id: '1', tour: false }, { id: '2', tour: true }];

  const filteredList = getTourList(list);

  expect(filteredList).toEqual([{ id: '2', tour: true }]);
});

test('filter to itens has breakfast and tour', () => {
  const list = [
    { id: '1', tour: true, breakfast: true },
    { id: '2', tour: false, breakfast: false },
    { id: '3', tour: true, breakfast: false }
  ];

  const filteredList = getTourAndBreakfastList(list);

  expect(filteredList).toEqual([{ id: '1', tour: true, breakfast: true }]);
});

test('order ascending list', () => {
  const orderedList = ascendingOrderList(2, 6);

  expect(orderedList).toBe(-1);
});

test('order descending list', () => {
  const orderedList = descendingOrderList(2, 6);

  expect(orderedList).toBe(1);
});

test('order list from bigger classification', () => {
  const list = [{ id: '1', classification: 3 }, { id: '2', classification: 4 }];

  const orderedList = orderBiggerClassificationList(list);

  expect(orderedList).toEqual([{ id: '2', classification: 4 }, { id: '1', classification: 3 }]);
});

test('order list from lower classification', () => {
  const list = [{ id: '1', classification: 3 }, { id: '2', classification: 4 }];

  const orderedList = orderLowerClassificationList(list);

  expect(orderedList).toEqual([{ id: '1', classification: 3 }, { id: '2', classification: 4 }]);
});

test('order list from bigger value', () => {
  const list = [
    { id: '1', prices: { week: 430, weekend: 362 }},
    { id: '2', prices: { week: 2072, weekend: 1980 }}
  ];

  const orderedList = orderBiggerValueList(list);

  expect(orderedList).toEqual([
    { id: '2', prices: { week: 2072, weekend: 1980 }},
    { id: '1', prices: { week: 430, weekend: 362 }}
  ]);
});

test('order list from lower value', () => {
  const list = [
    { id: '1', prices: { week: 430, weekend: 362 }},
    { id: '2', prices: { week: 2072, weekend: 1980 }}
  ];

  const orderedList = orderLowerValueList(list);

  expect(orderedList).toEqual([
    { id: '1', prices: { week: 430, weekend: 362 }},
    { id: '2', prices: { week: 2072, weekend: 1980 }}
  ]);
});
