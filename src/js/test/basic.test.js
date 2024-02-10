import sortPlayers from '../basic';

const result = sortPlayers([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('игроки сортируются в порядке убывания уровня здоровья', () => {
  expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  expect(result).toEqual(expected);
});